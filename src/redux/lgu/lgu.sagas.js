import {takeLatest, put, all, call} from 'redux-saga/effects';
import {auth, detachedAuth, handleUserProfile} from './../../firebase/Utils';
import lguTypes from './lgu.types';
import {handleAddLgu, handleFetchLgu, handleDeleteLgu, handleFetchLguT, } from './lgu.helpers';
import {setLgu, fetchLguStart} from './lgu.actions';

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
      yield call(handleUserProfile, { userAuth: user, additionalData });
     
  }

export function* addLgu({payload: {
    sex,
    name,
    position,
    street,
    barangay,
    zipCode,
    email,
    password  
}}){
        // const {user} = yield auth.createUserWithEmailAndPassword({email, password})
        // const additionalData = {name};
        // yield getSnapshotFromUserAuth(user,additionalData); 
    try{
        const timestamp = new Date();  
        yield handleAddLgu({
            sex,
            name,
            position,
            street,
            barangay,
            zipCode,
            email,
            password,
            adminUserUId: auth.currentUser.uid,
            createdDate: timestamp
        });
        yield put(
            fetchLguStart()
        );
        // yield auth.createUserWithEmailAndPassword({email, password})    
    }catch(err){
        // console.log(err);
    }
}

export function* onAddLguStart(){
    yield takeLatest(lguTypes.ADD_NEW_LGU_START, addLgu)
}

export function* fetchLgu({payload}){
    try{
        // const lgu = yield handleFetchLgu({filterType});
        const lgu = yield handleFetchLgu({payload});
        yield put(
            setLgu(lgu)
        );  

    }catch(err){
        // console.log(err);
    }
}

export function* onFetchLguStart(){
    yield takeLatest(lguTypes.FETCH_LGU_START, fetchLgu)
}

export function* deleteLgu({payload}){
    try{
        yield handleDeleteLgu(payload);
        yield put (
            fetchLguStart()
        );
    }catch(err){
        // console.log(err);
    }
}

export function* onDeleteLguStart(){
    yield takeLatest(lguTypes.DELETE_LGU_START, deleteLgu);
}

export function* fetchLguT({ payload }) {
    try {
      const lgu = yield handleFetchLguT(payload);
      yield put(
        setLgu(lgu)
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onFetchLguTStart() {
    yield takeLatest(lguTypes.FETCH_LGUT_START, fetchLguT);
  }

export default function* lguSagas(){
    yield all([
        call(onAddLguStart),
        call(onFetchLguStart),
        call(onDeleteLguStart),
        call(onFetchLguTStart)
    ])
}
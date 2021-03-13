import {takeLatest, put, all, call} from 'redux-saga/effects';
import {auth} from './../../firebase/Utils';
import lguTypes from './lgu.types';
import {handleAddLgu, handleFetchLgu, handleDeleteLgu} from './lgu.helpers';
import {setLgu, fetchLguStart} from './lgu.actions';

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
    }catch(err){
        // console.log(err);
    }
}

export function* onAddLguStart(){
    yield takeLatest(lguTypes.ADD_NEW_LGU_START, addLgu)
}

export function* fetchLgu({payload: {
    filterType
}}){
    try{
        const lgu = yield handleFetchLgu({filterType});
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

export default function* lguSagas(){
    yield all([
        call(onAddLguStart),
        call(onFetchLguStart),
        call(onDeleteLguStart)
    ])
}
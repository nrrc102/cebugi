import {all, call} from 'redux-saga/effects'; 
import userSagas from './user/user.sagas';
import lguSagas from './lgu/lgu.sagas';

export default function* RootSaga(){
    yield all([
        call(userSagas),
        call(lguSagas)
    ])
}
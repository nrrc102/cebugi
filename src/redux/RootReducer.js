import {combineReducers} from 'redux';
import userReducer from './user/user.reducer'; 
import lguReducer from './lgu/lgu.reducer';

export default combineReducers({
    user: userReducer,
    lguData: lguReducer
});
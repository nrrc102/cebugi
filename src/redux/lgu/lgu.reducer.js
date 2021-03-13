import lguTypes from './lgu.types';

const INITIAL_STATE = {
    lgu: []
}; 

const lguReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case lguTypes.SET_LGU:
            return{
                ...state,
                lgu: action.payload
            }
        default:
            return state;
    }
};

export default lguReducer;
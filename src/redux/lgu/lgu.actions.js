import lguTypes from './lgu.types';

export const addLguStart = lguData => ({
    type: lguTypes.ADD_NEW_LGU_START,
    payload: lguData
});

export const fetchLguStart = (filters={}) => ({
    type: lguTypes.FETCH_LGU_START,
    payload: filters
});

export const setLgu = lgu => ({
    type: lguTypes.SET_LGU,
    payload: lgu
});

export const deleteLguStart = lguID => ({
    type: lguTypes.DELETE_LGU_START,
    payload: lguID
});

export const fetchLguTStart = (LguID={}) => ({
    type: lguTypes.FETCH_LGUT_START,
    payload: LguID
});
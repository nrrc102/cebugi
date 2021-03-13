import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import RootReducer from './RootReducer';
import thunk from 'redux-thunk';
import createSagaMiddle from 'redux-saga';
import RootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddle();

export const middlewares = [thunk, logger, sagaMiddleware];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(RootSaga);

export default store;
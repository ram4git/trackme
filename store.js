import { createStore, applyMiddleware } from 'redux';
import { sagaMiddleware, rootSaga } from "./saga/rootSaga";
import logger from 'redux-logger'

import reducers from './reducer/rootReducer'; //Import the reducer

// Connect our store to the reducers


export default createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);


import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import homePageSaga from "./HomeSaga";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield all([
        ...homePageSaga
    ]);
}

import { all } from 'redux-saga/effects';

import gitSagas from './git'

export default function* rootSaga() {
    return yield all([
        gitSagas(),
    ])
}
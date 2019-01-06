import { all } from 'redux-saga/effects';
import {newsSaga} from '../saga/news'
import {loginSaga} from '../saga/login'

export default function* () {
    yield all([
        newsSaga(),
        loginSaga()
   ]);
}


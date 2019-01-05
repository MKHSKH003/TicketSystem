
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';

import {
  LOGIN,
  loginSuccess,
  loginFailure
} from '../../actions/loginActions';

import {loginApi} from '../../api';
import { newsBaseUrl, newsBaseUr } from "../../constants/api-selectors.js";

export function* userLogin(action) {
  try 
  {   console.log("login-saga",action.username, action.password);
      let isLoginSucess = yield call(loginApi.login,action.username, action.password);
      isLoginSucess=true;
      if(isLoginSucess)
      {
        Actions.newsFeed();
        yield put(loginSuccess());
      }
      else if(!isLoginSucess)
      { 
        yield put(loginFailure());
      }
  }
  catch(e)
  {
    yield put(loginFailure());
    console.log("Failure while loggin in.");
  }

}

export function* watcherLogin() {
     yield takeLatest(LOGIN, userLogin)
}

export function* loginSaga() {
    yield call(watcherLogin);
}


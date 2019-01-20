
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';

import {
  LOGIN,
  loginSuccess,
  loginFailure
} from '../../actions/loginActions';

import {loginApi} from '../../api';
import { loginBaseUrl } from "../../constants/api-selectors.js";

export function* userLogin(action) {
  try 
  {   
      let isLoginSucess = yield call(loginApi.login,loginBaseUrl,action.username, action.password);
      if(isLoginSucess._bodyText == 'true')
      {
        Actions.mainScreen();
        yield put(loginSuccess());
      }
      else if(isLoginSucess._bodyText == 'false')
      { 
        yield put(loginFailure());
      }
  }
  catch(e)
  {
    yield put(loginFailure());
    yield put(ToastActionsCreators.displayError('Failed, check your internet connections and retry.', 20000));
  }

}

export function* watcherLogin() {
     yield takeLatest(LOGIN, userLogin)
}

export function* loginSaga() {
    yield call(watcherLogin);
}


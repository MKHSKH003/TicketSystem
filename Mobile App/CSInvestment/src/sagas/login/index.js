
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

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
        yield put(ToastActionsCreators.displaySuccess('Logged in successfully!', 5000));
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
  }

}

export function* watcherLogin() {
     yield takeLatest(LOGIN, userLogin)
}

export function* loginSaga() {
    yield call(watcherLogin);
}



import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  LOAD_MESSAGES_REQUEST,
  loadMessagesSuccess,
} from '../../actions/chatActions';

import {chatApi} from '../../api';
import { messagesBaseUrl } from "../../constants/api-selectors.js";

export function* messages() {
  try 
  {   
      const messages = yield call(chatApi.getAllMessages,messagesBaseUrl);
      if(messages==undefined){throw Error;}
      yield put(loadMessagesSuccess(messages));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError('Failed, check your internet connections and retry.', 2000));
  }

}

export function* watcherMessages() {
     yield takeLatest(LOAD_MESSAGES_REQUEST, messages)
}

export function* messagesSaga() {
    yield call(watcherMessages);
}


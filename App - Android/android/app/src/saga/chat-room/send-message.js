
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  SEND_MESSAGE_REQUEST,
  sendMessageSuccess,
  loadMessagesSuccess
} from '../../actions/chatActions';

import {chatApi} from '../../api';
import { messagesBaseUrl } from "../../constants/api-selectors.js";

export function* sendMessage(action) {
  try 
  {   
      console.log('SAGA-SEND_MESSAGE_REQUEST',action.username,action.message)
      const messages = yield call(chatApi.sendMessage,messagesBaseUrl,action.username,action.message);
      if(messages==undefined){throw Error;}
      yield put(loadMessagesSuccess(messages));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError('Failed, check your internet connections and retry.', 2000));
  }

}

export function* watcherSendMessage() {
     yield takeLatest(SEND_MESSAGE_REQUEST, sendMessage)
}

export function* sendMessageSaga() {
    yield call(watcherSendMessage);
}


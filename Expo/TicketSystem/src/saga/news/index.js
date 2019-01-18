
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';

import {
  GET_NEWS,
  newsReceived,
  newsFailure
} from '../../actions/newsActions';

import {
  LOGIN,
  loginSuccess,
  loginFailure
} from '../../actions/loginActions';

import {newsApi, loginApi} from '../../api';
import { newsBaseUrl, newsBaseUr } from "../../constants/api-selectors.js";

import watcherLogi from '../login';

export function* fetchNews() {
  try 
  {
      const json = yield call(newsApi.getNews,newsBaseUrl);
      yield put(newsReceived(json.articles));
  }
  catch(e)
  {
    yield put(newsFailure());
    console.log("Failure while loading news."+e);
  }

}

export function* watcherGetNews() {
     yield takeLatest(GET_NEWS, fetchNews)
}

export function* newsSaga() {
   yield call(watcherGetNews)
   
}

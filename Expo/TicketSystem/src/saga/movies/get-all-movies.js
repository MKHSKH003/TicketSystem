
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  LOAD_MOVIES_REQUEST,
  loadMoviesSuccess,
} from '../../actions/moviesActions';

import {moviesApi} from '../../api';
import { moviesBaseUrl } from "../../constants/api-selectors.js";

export function* movies() {
  try 
  {   
      const movies = yield call(moviesApi.getAllMovies,moviesBaseUrl);
      if(movies.item1==undefined){throw Error;}
      yield put(loadMoviesSuccess(movies.item1,movies.item2));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError('Failed, check your internet connections and retry.', 2000));
  }

}

export function* watcherMovies() {
     yield takeLatest(LOAD_MOVIES_REQUEST, movies)
}

export function* moviesSaga() {
    yield call(watcherMovies);
}


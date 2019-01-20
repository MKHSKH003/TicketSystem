
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  UPDATE_MOVIE_PRICE_REQUEST,
  loadMoviesSuccess,
} from '../../actions/moviesActions';

import {moviesApi} from '../../api';
import { moviesBaseUrl } from "../../constants/api-selectors.js";

export function* updateMoviePrice(action) {
  try 
  {   
      const movies = yield call(moviesApi.updateMoviePrice,moviesBaseUrl, action.id,action.price, action.username);
      if(movies==undefined){throw Error;}
      yield put(ToastActionsCreators.displaySuccess('Movie price updated successfully!', 5000));
      yield put(loadMoviesSuccess(movies.item1,movies.item2));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError('Failed, check your internet connections and retry.', 2000));
  }

}

export function* watcherUpdateMoviePrice() {
     yield takeLatest(UPDATE_MOVIE_PRICE_REQUEST, updateMoviePrice)
}

export function* updateMoviePriceSaga() {
    yield call(watcherUpdateMoviePrice);
}


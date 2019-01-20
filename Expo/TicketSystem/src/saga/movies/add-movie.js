
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  ADD_MOVIE_REQUEST,
  loadMoviesSuccess,
} from '../../actions/moviesActions';

import {moviesApi} from '../../api';
import { moviesBaseUrl } from "../../constants/api-selectors.js";

export function* addMovie(action) {
  try 
  {   
      const movies = yield call(moviesApi.addMovie,moviesBaseUrl, action.name,action.price,action.url, action.username);
      if(movies==undefined){throw Error;}
      if(movies.item2 == 'true')
      {
        yield put(ToastActionsCreators.displaySuccess('Movie added successfully!', 5000));
        yield put(loadMoviesSuccess(movies.item1.item1,movies.item1.item2));
      }
      else
      { 
        yield put(ToastActionsCreators.displayError('Failed, please fill in '+movies.item2, 5000));
      }
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError('Failed, check your internet connections and retry.', 2000));
  }

}

export function* watcherAddMovie() {
     yield takeLatest(ADD_MOVIE_REQUEST, addMovie)
}

export function* addMovieSaga() {
    yield call(watcherAddMovie);
}


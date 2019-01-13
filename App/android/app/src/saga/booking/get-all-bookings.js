
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  LOAD_BOOKINGS_REQUEST,
  loadBookingsSuccess,
} from '../../actions/bookingActions';

import {bookingApi} from '../../api';
import { bookingBaseUrl } from "../../constants/api-selectors.js";

export function* bookings() {
  try 
  {   
      const bookings = yield call(bookingApi.getAllBookings,bookingBaseUrl);
      if(bookings==undefined){throw Error;}
      yield put(loadBookingsSuccess(bookings));
  }
  catch(e)
  {
    
    yield put(ToastActionsCreators.displayError('Failed, check your internet connections and retry.', 2000));
  }

}

export function* watcherBookings() {
     yield takeLatest(LOAD_BOOKINGS_REQUEST, bookings)
}

export function* bookingsSaga() {
    yield call(watcherBookings);
}


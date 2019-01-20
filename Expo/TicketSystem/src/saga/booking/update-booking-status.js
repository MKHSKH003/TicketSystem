
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  UPDATE_BOOKING_STATUS_REQUEST,
  loadBookingsSuccess,
} from '../../actions/bookingActions';

import {bookingApi} from '../../api';
import { bookingBaseUrl } from "../../constants/api-selectors.js";

export function* updateBookingStatus(action) {
  try 
  {   
      const bookings = yield call(bookingApi.updateBookingStatus,bookingBaseUrl,action.id,action.username);
      if(bookings==undefined){throw Error;}
      yield put(ToastActionsCreators.displaySuccess('Booking updated successfully!', 5000));
      yield put(loadBookingsSuccess(bookings));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError('Failed, check your internet connections and retry.', 20000));
  }

}

export function* watcherUpdateBookingStatus() {
     yield takeLatest(UPDATE_BOOKING_STATUS_REQUEST, updateBookingStatus)
}

export function* updateBookingStatusSaga() {
    yield call(watcherUpdateBookingStatus);
}


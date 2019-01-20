
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  DELETE_BOOKING_REQUEST,
  loadBookingsSuccess,
} from '../../actions/bookingActions';

import {bookingApi} from '../../api';
import { bookingBaseUrl } from "../../constants/api-selectors.js";

export function* deleteBooking(action) {
  try 
  {   
      console.log(action);
      const bookings = yield call(bookingApi.deleteBooking,bookingBaseUrl,action.id, action.username);
      if(bookings==undefined){throw Error;}
      yield put(ToastActionsCreators.displaySuccess('Booking deleted successfully!', 5000));
      yield put(loadBookingsSuccess(bookings));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError('Failed, check your internet connections and retry.', 20000));
  }

}

export function* watcherDeleteBooking() {
     yield takeLatest(DELETE_BOOKING_REQUEST, deleteBooking)
}

export function* deleteBookingSaga() {
    yield call(watcherDeleteBooking);
}


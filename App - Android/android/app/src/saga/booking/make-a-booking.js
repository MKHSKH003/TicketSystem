
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  BOOKING_REQUEST,
  bookingSuccess,
  bookingFailure
} from '../../actions/bookingActions';

import {bookingApi} from '../../api';
import { bookingBaseUrl } from "../../constants/api-selectors.js";

export function* booking(action) {
  try 
  {   
      let isbookingSucess = yield call(bookingApi.booking,bookingBaseUrl,action.name,action.cell,action.email, action.location, action.people, action.film,action.date, action.paymentDate);
      if(isbookingSucess._bodyText == 'true')
      {
        yield put(ToastActionsCreators.displaySuccess('Booking sent successfully!', 5000));
        yield put(bookingSuccess());
        Actions.mainScreen();
      }
      else
      { 
        yield put(ToastActionsCreators.displayError('Failed, please fill in '+isbookingSucess._bodyText, 2000));
        yield put(bookingFailure());
      }
  }
  catch(e)
  {
    yield put(bookingFailure());
    yield put(ToastActionsCreators.displayError('Failed, check your internet connection and retry.', 2000));
  }

}

export function* watcherBooking() {
     yield takeLatest(BOOKING_REQUEST, booking)
}

export function* bookingSaga() {
    yield call(watcherBooking);
}


import { all } from 'redux-saga/effects';
import {newsSaga} from '../saga/news'
import {loginSaga} from '../saga/login'
import {bookingSaga} from '../saga/booking/make-a-booking'
import {bookingsSaga} from '../saga/booking/get-all-bookings'
import {moviesSaga} from '../saga/movies/get-all-movies'
import {messagesSaga} from '../saga/chat-room/get-all-messages'
import {sendMessageSaga} from '../saga/chat-room/send-message'

export default function* () {
    yield all([
        newsSaga(),
        loginSaga(),
        bookingsSaga(),
        moviesSaga(),
        messagesSaga(),
        sendMessageSaga()
   ]);
}


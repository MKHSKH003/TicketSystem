import { all } from 'redux-saga/effects';
import {newsSaga} from '../saga/news'
import {loginSaga} from '../saga/login'
import {bookingSaga} from '../saga/booking/make-a-booking'
import {bookingsSaga} from '../saga/booking/get-all-bookings'
import {updateBookingStatusSaga} from '../saga/booking/update-booking-status'
import {deleteBookingSaga} from '../saga/booking/delete-booking'
import {moviesSaga} from '../saga/movies/get-all-movies'
import {addMovieSaga} from '../saga/movies/add-movie'
import {deleteMovieSaga} from '../saga/movies/delete-movie'
import {updateMoviePriceSaga} from '../saga/movies/update-movie-price'
import {messagesSaga} from '../saga/chat-room/get-all-messages'
import {sendMessageSaga} from '../saga/chat-room/send-message'

export default function* () {
    yield all([
        newsSaga(),
        loginSaga(),
        bookingSaga(),
        bookingsSaga(),
        updateBookingStatusSaga(),
        deleteBookingSaga(),
        moviesSaga(),
        addMovieSaga(),
        deleteMovieSaga(),
        updateMoviePriceSaga(),
        messagesSaga(),
        sendMessageSaga()
   ]);
}


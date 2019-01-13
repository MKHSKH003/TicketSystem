import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import newsReducer  from '../reducers/news'
import loginReducer  from '../reducers/login'
import bookingReducer  from '../reducers/booking/make-a-booking'
import bookingsReducer  from '../reducers/booking/get-all-bookings'
import moviesReducer  from '../reducers/movies/get-all-movies'
import messagesReducer  from '../reducers/chat-room/get-all-messages'
import sendMessageReducer  from '../reducers/chat-room/send-message'

const rootReducer = combineReducers({
    newsReducer,
    loginReducer,
    bookingReducer,
    bookingsReducer,
    moviesReducer,
    messagesReducer,
    sendMessageReducer,
    toast
});


export default rootReducer;
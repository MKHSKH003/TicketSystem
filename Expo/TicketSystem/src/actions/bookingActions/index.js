export const LOAD_BOOKINGS_REQUEST = 'LOAD_BOOKINGS_REQUEST';
export const LOAD_BOOKINGS_SUCCESS = 'LOAD_BOOKINGS_SUCCESS';

export const BOOKING_REQUEST = 'BOOKING_REQUEST';
export const BOOKING_SUCCESS = 'BOOKING_SUCCESS';
export const BOOKING_FAILURE ='BOOKING_FAILURE';

export const UPDATE_BOOKING_STATUS_REQUEST = 'UPDATE_BOOKING_STATUS_REQUEST';
export const DELETE_BOOKING_REQUEST = 'DELETE_BOOKING_REQUEST';

export const bookingRequest = (name,cell,email,location,people,film,date,paymentDate,bookedBy) => ({
      type: BOOKING_REQUEST, name,cell,email,
      location,people,film,date,paymentDate,bookedBy
});

export const bookingSuccess = () => ({
      type: BOOKING_SUCCESS,
});

export const bookingFailure = () => ({
      type: BOOKING_FAILURE,
});

export const loadBookingsRequest = () => {
    return{
      type: LOAD_BOOKINGS_REQUEST,
   }
};

export const loadBookingsSuccess = (bookings) => ({
      type: LOAD_BOOKINGS_SUCCESS,
      bookings
});

export const updateBookingStatusRequest = (id, username) => ({
      type: UPDATE_BOOKING_STATUS_REQUEST,
      id,
      username
});

export const deleteBookingRequest = (id, username) => ({
      type: DELETE_BOOKING_REQUEST,
      id,
      username
});

import {
 BOOKING_REQUEST,
 BOOKING_SUCCESS,
 BOOKING_FAILURE
} from '../../actions/bookingActions'

export const initialState = {
    booking:{
        name:null,
        cell:null,
        email:null,
        location:null,
        people:null,
        film:null,
        date:null,
        paymentDate:null,
        bookedBy:null
    },
    status: {
        bookingError: false,
        bookingSuccess: false,
    }
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING_REQUEST:{
        return { ...state,
                booking:{
                    name:action.name,
                    cell:action.cell,
                    email:action.email,
                    location:action.location,
                    people:action.people,
                    film:action.film,
                    date:action.date,
                    paymentDate:action.paymentDate,
                    bookedBy:action.bookedBy
                },
                status:{
                    bookingSuccess: false ,
                    loading:true
    
                 }
        };
     }
     case BOOKING_SUCCESS:{
        return { ...state, 
                 status:{
                    bookingSuccess: true ,
                    loading:false
                 }
            };
     }
     case BOOKING_FAILURE:{
        return { ...state, 
                 status:{
                    bookingError: true,
                    bookingSuccess: false,
                    loading:false
                 }
            };
     }
     default:
        return state;
   }
};

export default bookingReducer;
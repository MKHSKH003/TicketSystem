import {
 LOAD_BOOKINGS_REQUEST,
 LOAD_BOOKINGS_SUCCESS,
} from '../../actions/bookingActions'

export const initialState = {
    bookings:[],
    status: {
        loading: false, 
        received:false 
    }
};

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKINGS_REQUEST:{
        return { ...state,
                bookings:[],
                status:{
                    loading: true, 
                    received:false  
                 }
        };
     }
     case LOAD_BOOKINGS_SUCCESS:{
        return { ...state,
                 bookings:action.bookings,
                 status:{
                    loading: false, 
                    received:true  
                 }
            };
     }
    
     default:
        return state;
   }
};

export default bookingsReducer;
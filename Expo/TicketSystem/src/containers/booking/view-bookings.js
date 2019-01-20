import { connect } from 'react-redux'
import Bookings from '../../components/booking/view-bookings';
import {loadBookingsRequest, updateBookingStatusRequest, deleteBookingRequest} from '../../actions/bookingActions'

export const mapStateToProps = (state) => {
    return {
        bookings: state.bookingsReducer.bookings,
        username:state.loginReducer.username,
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     updateBookingStatus:(id, username) => { return dispatch(updateBookingStatusRequest(id, username));},
     deleteBooking:(id, username) =>  { return dispatch(deleteBookingRequest(id, username)); }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Bookings)


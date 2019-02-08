import { connect } from 'react-redux'
import Bookings from '../../components/booking/view-bookings';
import {loadBookingsRequest} from '../../actions/bookingActions'

export const mapStateToProps = (state) => {
    return {
        bookings: state.bookingsReducer.bookings,
    };
};


export default connect(mapStateToProps,null)(Bookings, p => p.onPageLoad)


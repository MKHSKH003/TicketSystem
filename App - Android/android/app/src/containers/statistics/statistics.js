import { connect } from 'react-redux'
import Statistics from '../../components/statistics/statistics';
import {loadBookingsRequest} from '../../actions/bookingActions'


export const mapStateToProps = (state) => {
    return {
        bookings: state.bookingsReducer.bookings,
        received: state.bookingsReducer.status.received

    };
};


export default connect(mapStateToProps,null)(Statistics)


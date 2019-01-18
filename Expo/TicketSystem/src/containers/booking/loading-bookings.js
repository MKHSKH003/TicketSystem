import { connect } from 'react-redux'
import LoadingBookings from '../../components/booking/loading-bookings';

const mapStateToProps = (state) =>{
    return {
        loading: state.bookingsReducer.status.loading
    }
} 

export default connect(mapStateToProps,null)(LoadingBookings)


import { connect } from 'react-redux'
import Booking from '../../components/booking/make-a-booking';
import { bookingRequest } from '../../actions/bookingActions';

export const mapStateToProps = (state) => {
    return {
        username:state.loginReducer.username,
        options: state.moviesReducer.options,
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     booking:(name,cell,email,location,people,film,date,paymentDate,bookedBy)=>{
         return dispatch(bookingRequest(name,cell,email,location,people,film,date,paymentDate,bookedBy))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Booking)


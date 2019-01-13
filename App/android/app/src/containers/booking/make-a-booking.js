import { connect } from 'react-redux'
import Booking from '../../components/booking/make-a-booking';
import { bookingRequest } from '../../actions/bookingActions';

const mapDispatchToProps =(dispatch)=>{
    return{
     booking:(name,cell,email,location,people,film,date,paymentDate)=>{
         return dispatch(bookingRequest(name,cell,email,location,people,film,date,paymentDate))
        }
    }
};

export default connect(null,mapDispatchToProps)(Booking)


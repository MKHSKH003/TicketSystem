import { connect } from 'react-redux'
import MainGrid from '../../components/main-screen/grid';
import {loadBookingsRequest} from '../../actions/bookingActions'
import {loadMoviesRequest} from '../../actions/moviesActions'
import {loadMessagesRequest} from '../../actions/chatActions'

const mapDispatchToProps =(dispatch,props)=>{
    return{
     onLoadBookings: ()=> dispatch(loadBookingsRequest()),
     onLoadMovies: ()=> dispatch(loadMoviesRequest()),
     onLoadMessages: ()=> dispatch(loadMessagesRequest())
    }
};


export default connect(null,mapDispatchToProps)(MainGrid)


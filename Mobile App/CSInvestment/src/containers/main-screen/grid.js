import { connect } from 'react-redux'
import MainGrid from '../../components/main-screen/grid';
import {loadStudentsRequest} from '../../actions/studentsActions'
// import {loadMoviesRequest} from '../../actions/moviesActions'
// import {loadMessagesRequest} from '../../actions/chatActions'

const mapDispatchToProps =(dispatch,props)=>{
    return{
      onLoadStudents: ()=> dispatch(loadStudentsRequest()),
    //  onLoadMovies: ()=> dispatch(loadMoviesRequest()),
    //  onLoadMessages: ()=> dispatch(loadMessagesRequest())
    }
};


export default connect(null,mapDispatchToProps)(MainGrid)


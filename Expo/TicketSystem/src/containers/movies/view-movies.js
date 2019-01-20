import { connect } from 'react-redux'
import Movies from '../../components/movies/view-movies';
import { addMovieRequest,updateMoviePriceRequest,deleteMovieRequest } from '../../actions/moviesActions';

export const mapStateToProps = (state) => {
    return {
        movies: state.moviesReducer.movies,
        username:state.loginReducer.username,
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     addMovie:(name, price, url, username)=>{ return dispatch(addMovieRequest(name, price, url, username))},
     deleteMovie:(id, username)=>{ return dispatch(deleteMovieRequest(id, username))},
     updateMoviePrice:(id, price, username)=>{ return dispatch(updateMoviePriceRequest(id, price, username))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Movies)


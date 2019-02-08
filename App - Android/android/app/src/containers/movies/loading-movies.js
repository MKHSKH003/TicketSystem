import { connect } from 'react-redux'
import LoadingMovies from '../../components/movies/loading-movies';

const mapStateToProps = (state) =>{
    return {
        loading: state.moviesReducer.status.loading
    }
} 

export default connect(mapStateToProps,null)(LoadingMovies)


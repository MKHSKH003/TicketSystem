import { connect } from 'react-redux'
import Movies from '../../components/movies/view-movies';

export const mapStateToProps = (state) => {
    return {
        movies: state.moviesReducer.movies,
    };
};


export default connect(mapStateToProps,null)(Movies)


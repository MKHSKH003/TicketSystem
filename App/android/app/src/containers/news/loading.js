import { connect } from 'react-redux'
import Loading from '../../components/news/loading';

const mapStateToProps = (state) =>{
    //console.log('Loading-container: ');
    return {
        loading: state.newsReducer.status.loading
    }
} 

export default connect(mapStateToProps,null)(Loading)


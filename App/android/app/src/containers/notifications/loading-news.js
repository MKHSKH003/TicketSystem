import { connect } from 'react-redux'
import LoadingNews from '../../components/notifications/loading-news'; 

const mapStateToProps = (state) => {
    console.log('loading-news-container: ');
    return{
        received: state.newsReducer.status.received,
        error: state.newsReducer.status.loadingError
    }
};

export default  connect(mapStateToProps,null)(LoadingNews)

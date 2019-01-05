import { connect } from 'react-redux'
import NewsItem from '../../components/news/news-item';

const mapStateToProps = (state) => {
  //console.log('NewsItem-container: ');
  return {
    article: state.newsReducer.news,
  }
}

export default connect(mapStateToProps,null)(NewsItem)

import { connect } from 'react-redux';
import LoadButton from '../../components/news/load-button';
import { getNews } from '../../actions/newsActions';


const mapDispatchToProps =(dispatch)=>{
    //console.log('LoadButton-mapDispatchToProps: ');
    return{
     getNews:()=> {dispatch(getNews())},
    }
};

export default connect(null,mapDispatchToProps)(LoadButton);

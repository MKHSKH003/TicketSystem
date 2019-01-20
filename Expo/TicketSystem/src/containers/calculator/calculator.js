import { connect } from 'react-redux'
import Calculator from '../../components/calculator/calculator'; 

const mapStateToProps = (state) => {
    return{
        options: state.moviesReducer.options,
    }
};

export default  connect(mapStateToProps,null)(Calculator)

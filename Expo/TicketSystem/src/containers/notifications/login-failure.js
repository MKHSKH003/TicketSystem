import { connect } from 'react-redux'
import LoginFailure from '../../components/notifications/login-failure';

const mapStateToProps = (state) => {
    //console.log('login-failure-container: '+JSON.stringify(state));
    return{
        isLoginSuccess: state.loginReducer.status.isLoginSuccess
    }
}; 

export default connect(mapStateToProps,null)(LoginFailure)


import { connect } from 'react-redux'
import LoginScreen from '../../components/login/components/LoginScreen';
import { login } from '../../actions/loginActions';


const mapDispatchToProps =(dispatch)=>{
    return{
     userLogin:(username,password)=>{
         return dispatch(login(username, password))
        }
    }
};

export default connect(null,mapDispatchToProps)(LoginScreen)


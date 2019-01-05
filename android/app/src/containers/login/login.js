import { connect } from 'react-redux'
import LoginScreen from '../../components/login/components/LoginScreen';
import { login } from '../../actions/loginActions';


const mapDispatchToProps =(dispatch)=>{
    //console.log('login-mapDispatchToProps')
    return{
     userLogin:(username,password)=>{
         //console.log('login-mapDispatchToProps: username:'+username);
         return dispatch(login(username, password))
        }
    }
};

export default connect(null,mapDispatchToProps)(LoginScreen)


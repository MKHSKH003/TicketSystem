import {
 LOGIN,
 LOGIN_SUCCESS,
 LOGIN_FAILURE

} from '../../actions/loginActions'

export const initialState = {
    airtcles: [],
    status: {
        loading: false,
        loadingError: false,
        received:false,
        isLoginSuccess: false
    }
};

const loginReducer = (state = {status:{isLoginSuccess: true}}, action) => {
  switch (action.type) {
    case LOGIN:{
        return { ...state,
                username: action.username, 
                password: action.password,
                status:{
                    isLoginSuccess: true 
                 }
        };
     }
     case LOGIN_SUCCESS:{
        return { ...state, 
                 status:{
                    isLoginSuccess: true 
                 }
            };
     }
     case LOGIN_FAILURE:{
        return { ...state, 
                 status:{
                    isLoginSuccess: false 
                 }
            };
     }
     default:
        return state;
   }
};

export default loginReducer;
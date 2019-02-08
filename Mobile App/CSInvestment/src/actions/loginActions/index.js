
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE ='LOGIN_FAILURE';

export const login = (username, password) => {
    return{
      type: LOGIN,
      username,
      password
   }
};

export const loginSuccess = () => ({
      type: LOGIN_SUCCESS,
      
});

export const loginFailure = () => ({
      type: LOGIN_FAILURE,
});
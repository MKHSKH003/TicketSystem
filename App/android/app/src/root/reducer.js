import { combineReducers } from 'redux';

import newsReducer  from '../reducers/news'
import loginReducer  from '../reducers/login'

const rootReducer = combineReducers({
    newsReducer,
    loginReducer
});


export default rootReducer;
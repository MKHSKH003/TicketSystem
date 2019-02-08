import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import loginReducer  from '../reducers/login'
import addStudentReducer  from '../reducers/students/add-student'
import loadStudentsReducer  from '../reducers/students/load-students'

const rootReducer = combineReducers({
    loginReducer,
    addStudentReducer,
    loadStudentsReducer,
    toast
});


export default rootReducer;

import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  DELETE_REQUEST,
  loadStudentsSuccess,
} from '../../actions/studentsActions';

import {studentsApi} from '../../api';
import { studentsBaseUrl } from "../../constants/api-selectors.js";

export function* deleteStudent(action) {
  try 
  {   
      const students = yield call(studentsApi.deleteStudent,studentsBaseUrl,action.id, action.username);
      if(students==undefined){throw Error;}
      yield put(ToastActionsCreators.displaySuccess('Student deleted successfully!', 5000));
      yield put(loadStudentsSuccess(students));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError('Failed, check your internet connections and retry.', 20000));
  }

}

export function* watcherDeleteStudent() {
     yield takeLatest(DELETE_REQUEST, deleteStudent)
}

export function* deleteStudentSaga() {
    yield call(watcherDeleteStudent);
}


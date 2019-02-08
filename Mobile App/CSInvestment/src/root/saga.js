import { all } from 'redux-saga/effects';

import {loginSaga} from '../sagas/login'
import {addStudentSaga} from '../sagas/students/add-student'
import {getStudentsSaga} from '../sagas/students/get-students'
import {updateStudentImageSaga} from '../sagas/students/update-student-image'
import {updatePaymentStatusSaga} from '../sagas/students/update-payment-status'
import {deleteStudentSaga} from '../sagas/students/delete-student'

export default function* () {
    yield all([
        loginSaga(),
        addStudentSaga(),
        getStudentsSaga(),
        updateStudentImageSaga(),
        updatePaymentStatusSaga(),
        deleteStudentSaga()
   ]);
}


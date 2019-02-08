import { connect } from 'react-redux'
import Students from '../../components/students/view-students';
import {updatePaymentStatusRequest, deleteRequest, updateImageRequest} from '../../actions/studentsActions'

export const mapStateToProps = (state) => {
    return {
        students: state.loadStudentsReducer.students,
        username: state.loginReducer.username,
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     updatePaymentStatus: (id, username) => { return dispatch(updatePaymentStatusRequest(id, username));},
     updateImage: (id, image, username) => {return dispatch(updateImageRequest(id, image, username));},
     deleteStudent: (id, username) =>  { return dispatch(deleteRequest(id, username)); }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Students)


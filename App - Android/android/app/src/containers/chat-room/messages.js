import { connect } from 'react-redux'
import ChatRoom from '../../components/chat-room/chat-room';
import { sendMessageRequest } from '../../actions/chatActions';

export const mapStateToProps = (state) => {
    return {
        messages: state.messagesReducer.messages,
        username:state.loginReducer.username
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     sendMessage:(username,message)=>{
         return dispatch(sendMessageRequest(username, message))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ChatRoom)


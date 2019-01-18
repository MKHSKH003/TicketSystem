import {
 SEND_MESSAGE_REQUEST,
 SEND_MESSAGE_SUCCESS,
} from '../../actions/chatActions'

export const initialState = {
    message:'',
    username:'',
    status: {
        loading: false, 
        received:false 
    }
};

const sendMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:{
        return { ...state,
                message:action.message,
                username:action.username,
                status:{
                    loading: true, 
                    received:false  
                 }
        };
     }
     case SEND_MESSAGE_SUCCESS:{
        return { ...state,
                 messages:action.messages,
                 status:{
                    loading: false, 
                    received:true  
                 }
            };
     }
    
     default:
        return state;
   }
};

export default sendMessageReducer;
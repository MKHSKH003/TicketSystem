import {
 LOAD_MESSAGES_REQUEST,
 LOAD_MESSAGES_SUCCESS,
} from '../../actions/chatActions'

export const initialState = {
    messages:[],
    status: {
        loading: false, 
        received:false 
    }
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MESSAGES_REQUEST:{
        return { ...state,
                messages:[],
                status:{
                    loading: true, 
                    received:false  
                 }
        };
     }
     case LOAD_MESSAGES_SUCCESS:{
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

export default messagesReducer;
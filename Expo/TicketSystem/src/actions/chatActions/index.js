export const LOAD_MESSAGES_REQUEST = 'LOAD_MESSAGES_REQUEST';
export const LOAD_MESSAGES_SUCCESS = 'LOAD_MESSAGES_SUCCESS';

export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';

export const loadMessagesRequest = () => {
    return{
      type: LOAD_MESSAGES_REQUEST,
   }
};

export const loadMessagesSuccess = (messages) => ({
      type: LOAD_MESSAGES_SUCCESS,
      messages
});

export const sendMessageRequest = (username,message) => {
    return{
      type: SEND_MESSAGE_REQUEST,
      username,
      message
   }
};

export const sendMessageSuccess = (messages) => ({
      type: SEND_MESSAGE_SUCCESS,
      messages
});

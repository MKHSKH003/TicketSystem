
export const getAllMessages = (messagesBaseUrl) =>{
   return fetch(messagesBaseUrl+`get-all-messages`).then(response => response.json()).catch(error => {
          console.log(error)
  }); 
   
};

export const sendMessage = (messagesBaseUrl, username,message) =>{
   return fetch(messagesBaseUrl+`send-message?username=${username}&message=${message}`).then(response => response.json()).catch(error => {
          console.log(error)
  }); 
   
};

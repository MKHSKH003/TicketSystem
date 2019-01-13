export const booking = (bookingBaseUrl,name,cell,email,location,people,film,date,paymentDate) =>
{
    return fetch(bookingBaseUrl+`make-a-booking?name=${name}&cell=${cell}&email=${email}&location=${location}&people=${people}&film=${film}&date=${date}&paymentDate=${paymentDate}`)
           .then(response =>{ console.log("api-back",response.json());return response});
};


export const getAllBookings = (bookingBaseUrl) =>{
   return fetch(bookingBaseUrl+`get-all-bookings`).then(response => response.json()).catch(error => {
          console.log(error)
  }); 
   
};

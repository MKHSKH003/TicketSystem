export const booking = (bookingBaseUrl,name,cell,email,location,people,film,date,paymentDate,bookedBy) =>
{
    return fetch(bookingBaseUrl+`make-a-booking?name=${name}&cell=${cell}&email=${email}&location=${location}&people=${people}&film=${film}&date=${date}&paymentDate=${paymentDate}&bookedBy=${bookedBy}`)
           .then(response =>{return response});
};


export const getAllBookings = (bookingBaseUrl) =>{
   return fetch(bookingBaseUrl+`get-all-bookings`)
          .then(response => response.json())
          .catch(error => {console.log(error)
  }); 
};

export const updateBookingStatus = (bookingBaseUrl, id, username) =>{
   return fetch(bookingBaseUrl+`update-booking-status?id=${id}&username=${username}`)
          .then(response => response.json())
          .catch(error => {console.log(error)
  }); 
};

export const deleteBooking = (bookingBaseUrl, id, username) =>{
   return fetch(bookingBaseUrl+`delete-booking?id=${id}&username=${username}`)
          .then(response => response.json())
          .catch(error => {console.log(error)
  }); 
};

export const addStudent = (studentsBaseUrl, name, cell, email, location, isAdmin, createdBy) =>
{
    return fetch(studentsBaseUrl+`add-student?name=${name}&cell=${cell}&email=${email}&location=${location}&isAdmin=${isAdmin}&createdBy=${createdBy}`)
           .then(response =>{return response})
           .catch(function(error) {
            console.log("API",error);
           })
};

export const getStudents = (studentsBaseUrl) =>
{
    return fetch(studentsBaseUrl+`get-students`)
           .then(response =>{return response.json()});
};

export const updateStudentImage = (studentsBaseUrl, id, image, username) =>
{
    return fetch(studentsBaseUrl+`update-student-image?id=${id}&username=${username}`,
    {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(image),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(response =>{return JSON.parse(response._bodyText)});
};


export const updatePaymentStatus = (studentsBaseUrl, id, username) =>{
   return fetch(studentsBaseUrl+`update-payment-status?id=${id}&username=${username}`)
          .then(response => response.json())
          .catch(error => {console.log(error)
  }); 
};


export const deleteStudent = (studentsBaseUrl, id, username) =>{
   return fetch(studentsBaseUrl+`delete-student?id=${id}&username=${username}`)
          .then(response => response.json())
          .catch(error => {console.log(error)
  }); 
};
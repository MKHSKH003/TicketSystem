
export const getAllMovies = (moviesBaseUrl) =>{
   return fetch(moviesBaseUrl+`get-all-movies`)
          .then(response => response.json())
          .catch(error => {console.log(error)
  }); 
};

export const addMovie = (moviesBaseUrl, name, price, url, username) =>{
   return fetch(moviesBaseUrl+`add-movie?name=${name}&price=${price}&url=${url}&username=${username}`)
          .then(response => response.json())
          .catch(error => {console.log(error)
  }); 
};

export const deleteMovie = (moviesBaseUrl, id, username) =>{
   return fetch(moviesBaseUrl+`delete-movie?id=${id}&username=${username}`)
          .then(response => response.json())
          .catch(error => {console.log(error)
  }); 
};

export const updateMoviePrice = (moviesBaseUrl, id, price, username) =>{
   return fetch(moviesBaseUrl+`update-movie-price?id=${id}&price=${price}&username=${username}`)
          .then(response => response.json())
          .catch(error => {console.log(error)
  }); 
};


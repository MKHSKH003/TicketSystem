
export const getAllMovies = (moviesBaseUrl) =>{
   return fetch(moviesBaseUrl+`get-all-movies`).then(response => response.json()).catch(error => {
          console.log(error)
  }); 
   
};

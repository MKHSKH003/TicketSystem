export const LOAD_MOVIES_REQUEST = 'LOAD_MOVIES_REQUEST';
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';

export const ADD_MOVIE_REQUEST = 'ADD_MOVIE_REQUEST';
export const DELETE_MOVIE_REQUEST = 'DELETE_MOVIE_REQUEST';
export const UPDATE_MOVIE_PRICE_REQUEST = 'UPDATE_MOVIE_PRICE_REQUEST';

export const loadMoviesRequest = () => {
    return{
      type: LOAD_MOVIES_REQUEST,
   }
};

export const loadMoviesSuccess = (movies,options) => ({
      type: LOAD_MOVIES_SUCCESS,
      movies,
      options
});

export const addMovieRequest = (name, price, url, username ) => {
    return{
      type: ADD_MOVIE_REQUEST,
      name,
      price,
      url,
      username
   }
};

export const deleteMovieRequest = (id, username) => {
    return{
      type: DELETE_MOVIE_REQUEST,
      id,
      username
   }
};

export const updateMoviePriceRequest = (id ,price, username) => {
    return{
      type: UPDATE_MOVIE_PRICE_REQUEST,
      id,
      price,
      username
   }
};
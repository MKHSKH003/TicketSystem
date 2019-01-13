export const LOAD_MOVIES_REQUEST = 'LOAD_MOVIES_REQUEST';
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';


export const loadMoviesRequest = () => {
    return{
      type: LOAD_MOVIES_REQUEST,
   }
};

export const loadMoviesSuccess = (movies) => ({
      type: LOAD_MOVIES_SUCCESS,
      movies
});

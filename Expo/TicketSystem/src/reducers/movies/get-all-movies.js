import {
 LOAD_MOVIES_REQUEST,
 LOAD_MOVIES_SUCCESS,
 ADD_MOVIE_REQUEST
} from '../../actions/moviesActions'

export const initialState = {
    movies:[],
    options:[],
    status: {
        loading: false, 
        received:false 
    }
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES_REQUEST:{
        return { ...state,
                movies:[],
                status:{
                    loading: true, 
                    received:false  
                 }
        };
     }
     case LOAD_MOVIES_SUCCESS:{
        return { ...state,
                 movies:action.movies,
                 options:action.options,
                 status:{
                    loading: false, 
                    received:true  
                 }
            };
     }
      
      case ADD_MOVIE_REQUEST:{
        return { ...state,
                 name:action.name,
                 price:action.price,
                 url:action.url,
                 username:action.username
            };
     }
     default:
        return state;
   }
};

export default moviesReducer;
import {
 LOAD_MOVIES_REQUEST,
 LOAD_MOVIES_SUCCESS,
} from '../../actions/moviesActions'

export const initialState = {
    movies:[],
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
                 status:{
                    loading: false, 
                    received:true  
                 }
            };
     }
    
     default:
        return state;
   }
};

export default moviesReducer;

import {

GET_NEWS,
NEWS_RECEIVED,
NEWS_FAILURE

} from '../../actions/newsActions'

const newsReducer = (state = {status:{received: false}}, action) => {
  switch (action.type) {
     case GET_NEWS:{
        return { ...state, 
                  news: [], 
                  status:{
                    loading: true, 
                    received:false 
                  }
        };
     }
     case NEWS_RECEIVED:{
        return { ...state,
                 news : action.json, 
                 status:{
                    loading: false,
                    received:true 
                  }
        };
     }
    case NEWS_FAILURE:{
        return { ...state, 
                 status:{
                    loadingError:true 
                } 
        };
     }

     default:
        return state;
   }
};

export default newsReducer;

export const GET_NEWS = 'GET_NEWS';
export const NEWS_RECEIVED = 'NEWS_RECEIVED';
export const NEWS_FAILURE ='NEWS_FAILURE';

export const getNews = () => {
    return{
      type: GET_NEWS,
   }
};

export const newsReceived = (json) => ({
      type: NEWS_RECEIVED,
      json
});

export const newsFailure = () => ({
      type: NEWS_FAILURE,
});
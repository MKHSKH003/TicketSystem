
export const getNews = (newsBaseUrl) =>{
   return fetch(newsBaseUrl).then(response => response.json()).catch(error => {
          console.log(error)
  }); 
   
};

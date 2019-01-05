export const newsBaseUrl = 'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc';

export const login = (username, password) =>{
    //console.log('api-username: '+username,'api-password: '+password);
    //return false;
   return fetch(newsBaseUrl).then(response => response.json(), ); 
};

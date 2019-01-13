import appsettings from '../../../../app.json';

export const newsBaseUrl = 'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc';
export const loginBaseUrl =appsettings.ApiRestWebServer+'/api/user-login/';
export const bookingBaseUrl =appsettings.ApiRestWebServer+'/api/booking/';
export const moviesBaseUrl =appsettings.ApiRestWebServer+'/api/movies/';
export const messagesBaseUrl =appsettings.ApiRestWebServer+'/api/messages/';


export const login = (loginBaseUrl,username, password) =>{
    return fetch(loginBaseUrl+`is-login-success?username=${username}&password=${password}`)
           .then(response =>{ console.log("api-back",response.json());return response});
};

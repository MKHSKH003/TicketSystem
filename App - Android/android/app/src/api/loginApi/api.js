export const login = (loginBaseUrl,username, password) =>
{
    console.log(loginBaseUrl+`is-login-success?username=${username}&password=${password}`  );
    return fetch(loginBaseUrl+`is-login-success?username=${username}&password=${password}`)
           .then(response =>{ console.log("api-back",response.json());return response});
};

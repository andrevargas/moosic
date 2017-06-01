const ACCESS_TOKEN_KEY = 'moosic.access_token';

export const saveAccessToken = token =>
    localStorage.setItem(ACCESS_TOKEN_KEY, token);

export const getAccessToken = () => 
    localStorage.getItem(ACCESS_TOKEN_KEY);
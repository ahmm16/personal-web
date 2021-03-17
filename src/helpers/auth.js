export const getToken = () => {
    return sessionStorage.getItem('authToken');
}
export const setToken = (authToken) => {
    return sessionStorage.setItem('authToken', authToken);
}
export const removeToken = () => {
    return sessionStorage.removeItem('authToken');
}
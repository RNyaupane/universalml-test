const getAccessFromLocalStorage = localStorage.getItem('access_token') ? JSON.parse(localStorage.getItem('access_token')) : null
const getRefreshFromLocalStorage = localStorage.getItem('refresh_token') ? JSON.parse(localStorage.getItem('refresh_token')) : null

export const config = {
  headers: {
    Authorization: `Bearer ${
        getAccessFromLocalStorage !== null ? getAccessFromLocalStorage.access_token : ""
    }`,
    Accept: "application/json",
  },
};
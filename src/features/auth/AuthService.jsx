import axios from 'axios'
import { base_url } from '../../data/base_url'
const getAceessToken = localStorage.getItem('access_token') ? JSON.parse(localStorage.getItem("access_token")) : ""
const getRefreshToken = localStorage.getItem('refresh_token') ? JSON.parse(localStorage.getItem("refresh_token")) : ""

const config = {
    headers: {
        'Authorization': `Bearer ${getAceessToken}`,
        'Accept': 'application/json'
    }
}

const login = async (userData) => {
    const response = await axios.post(`${base_url}/users/login/`, userData);
    if (response.data) {
        localStorage.setItem('access_token', JSON.stringify(response.data.access_token));
        localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token));
    }
    return response.data;
}


const register = async (userData) => {
    const response = await axios.post(`${base_url}/users/register/`, userData);
    return response.data;
}

const authService = {
    login,
    register
}

export default authService;
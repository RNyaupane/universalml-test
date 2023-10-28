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

const getAiApps = async () => {
    const response = await axios.get(`${base_url}/ai/`);
    return response.data;
}

const aiAppService = {
    getAiApps
}

export default aiAppService;

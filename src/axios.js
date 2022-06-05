import axios from 'axios';

const instance = axios.create(
    {
        baseUrl: '...' // URL of the API
    }
)

export default instance;
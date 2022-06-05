import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'http://localhost:5001/ecommerce-81161/us-central1/api' // URL of the API
    }
)

export default instance;
/**
 * Creates and configures an Axios HTTP client instance.
 * 
 * @returns AxiosInstance An Axios HTTP client instance configured with the baseURL.
 */
import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'http://localhost:8081',
    })
}
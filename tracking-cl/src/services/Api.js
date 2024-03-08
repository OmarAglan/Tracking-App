/**
 * Imports the axios HTTP client library.
 */
import axios from 'axios'

/**
 * Creates and configures an Axios instance to make requests to the API.
 * Sets the base URL and default headers for JSON content type.
 */
export default () => {
  return axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

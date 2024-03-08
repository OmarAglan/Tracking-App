/**
 * Imports API client and AuthService.
 */
import API from './API'
//import AuthService from './AuthService'

/**
 * Registers a new user with the given credentials.
 *
 * @param {Object} credentials - The user credentials.
 * @returns {Promise} A promise that resolves when registration is complete.
 */
export default {
  register(credentials) {
    return API().post('register', credentials)
  }
}

/**
 * Calls the AuthService register method to register a new user
 * with the provided credentials.
 */
//AuthService.register({
//  email: 'test@test.com',
//  password: 'test'
//})

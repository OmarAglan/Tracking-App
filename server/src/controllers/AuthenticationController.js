/**
 * Imports the User model from the models module
*/
const { User } = require('../models')

/**
 * Registers a new user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 *
 * @returns {Object} The new user object.
 */
module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (error) {
      res.status(400).send({
        error: 'This Username is already in use.'
      })
    }
  }
}

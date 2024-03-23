/**
 * Defines the User model.
 *
 * @param {Object} sequelize - Sequelize instance
 * @param {Object} DataTypes - Sequelize data types
 *
 * @returns {Object} - The User model
 */
module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

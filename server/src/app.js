/**
 * Imports the required modules:
 * - express: The Express.js web framework
 * - bodyParser: Middleware for parsing request bodies
 * - cors: Cross-Origin Resource Sharing middleware
 * - morgan: HTTP request logger middleware
 * - sequelize: ORM for database access
 * - config: Application configuration
 */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

/**
 * Configures Express middleware.
 * - morgan: Logs requests to the console.
 * - bodyParser.json(): Parses JSON request bodies.
 * - cors(): Enables CORS for all routes.
 */
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/**
 * Imports and configures routes.
 * Starts the Express server on the port specified in the config.
 * Logs a message when the server starts.
 */
require('./routes')(app)
sequelize.sync().then(() => {
  app.listen(config.port)
  console.log('server is running on port: ' + config.port)
})

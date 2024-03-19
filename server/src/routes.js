const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  //
  app.get('/', (req, res) => {
    res.send({
      message: 'hello world, This is the server index page'
    })
  })
  //
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  //
  app.get('/status', (req, res) => {
    res.send({
      message: 'server is running on port: 8081!'
    })
  })
}

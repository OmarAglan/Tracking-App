const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({
    message: 'hello world, This is the server index page'
  })
})
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.username}! Your user was registered! Have fun!`
  })
})
app.get('/status', (req, res) => {
  res.send({
    message: 'server is running on port:' + ' 8081!'
  })
})

app.listen(process.env.PORT || 8081)
console.log('server is running on port:' + ' or 8081!')

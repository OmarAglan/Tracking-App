const joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = joi.object({
      username: joi.string().alphanum().min(3).max(30).required(),
      password: joi.string().regex(
        /^[a-zA-Z0-9]{8,32}$/
      )
    })
    const validation = schema.validate(req.body)
    if (validation.error) {
      const errorMessage = validation.error.details[0].message
      return res.status(400).send({
        error: errorMessage
      })
    } else {
      next()
    }
  }
}

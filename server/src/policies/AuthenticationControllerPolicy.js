const joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = joi.object({
      username: joi.string().alphanum().min(6).max(30).required(),
      password: joi.string()
        .regex(/[ -~]*[a-z][ -~]*/) // at least 1 lower-case
        .regex(/[ -~]*[A-Z][ -~]*/) // at least 1 upper-case
        .regex(/[ -~]*[0-9][ -~]*/) // at least 1 number
        .min(8) // at least 8 characters
        .max(32) // at most 32 characters
        .required() // required

    })
    const validation = schema.validate(req.body)
    if (validation.error) {
      switch (validation.error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'Username is required'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Password must be at least 8 characters \n and contain at least 1 lower-case, \n 1 upper-case, and 1 number'
          })
          break
        default:
          res.status(400).send({
            error: 'Register fail'
          })
      }
    } else {
      next()
    }
  }
}

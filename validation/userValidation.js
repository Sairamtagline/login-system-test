const Joi = require('joi')

module.exports.credentialVerification = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .custom((value, helper) => {
      if (
        !new RegExp(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^0-9a-zA-Z])(?=.{8,20})',
        ).test(value)
      ) {
        return helper.message(
          `Passwords should contain at least one capital letter, one lowercase letter, one number, and one special character, and must be between 8 and 20 characters long.`,
        )
      }
    })
    .required(),
})

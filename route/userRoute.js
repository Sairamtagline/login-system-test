const express = require('express')
const { validate } = require('../common/common')
const { signUp, signIn } = require('../controller/userController')
const { credentialVerification } = require('../validation/userValidation')

const userRoutes = express.Router()

//Route use for user registration
userRoutes.post('/sign-up', validate(credentialVerification), signUp)

//Route use for user login
userRoutes.post('/sign-In', validate(credentialVerification), signIn)

module.exports = userRoutes

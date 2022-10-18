const { response } = require('../common/common')
const bcrypt = require('bcrypt')
const { mysql } = require('../app')
const { getUserByEmail } = require('../service/userService')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//Function use for user registration
module.exports.signUp = async (req, res) => {
  try {
    const { email, password } = req?.body
    const [verifyEmail] = await getUserByEmail(email)

    if (verifyEmail) {
      return response(
        false,
        res,
        400,
        'This email already register. Please login now',
      )
    }

    const encryptPassword = bcrypt.hashSync(
      password,
      parseInt(process.env.SALT),
    )

    const userDetails = await new Promise((resolve, reject) => {
      mysql.execute(
        'INSERT INTO users (email, password) VALUES ("' +
          email +
          '","' +
          encryptPassword +
          '");',
        function (error, results) {
          if (error) reject(error)
          resolve(results)
        },
      )
    })

    return response(true, res, 200, 'User registration successfully', {
      id: userDetails.insertId,
      email: email,
    })
  } catch (error) {
    return response(false, res, 500, error.message)
  }
}

//Function use for user login
module.exports.signIn = async (req, res) => {
  try {
    const { email, password } = req?.body
    const [verifyEmail] = await getUserByEmail(email)

    if (!verifyEmail) {
      return response(false, res, 404, 'Users not found')
    }

    const compareSync = bcrypt.compareSync(password, verifyEmail?.password)

    if (!compareSync) {
      return response(false, res, 400, 'Wrong password, Please try again.')
    }
    let token = jwt.sign(
      {
        id: verifyEmail.id,
        email: email,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: 31556926,
      },
    )
    return response(true, res, 200, 'User logged in successfully', {
      id: verifyEmail.id,
      email: email,
      token,
    })
  } catch (error) {
    return response(false, res, 500, error.message)
  }
}

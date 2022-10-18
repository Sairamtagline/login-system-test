const { mysql } = require('../app')

// Function use for get user details by email.
module.exports.getUserByEmail = async (email) => {
  return new Promise((resolve, reject) => {
    mysql.execute(
      'SELECT * FROM `users` WHERE `email` = "' + email + '" LIMIT 1',
      function (error, results) {
        if (error) reject(error)
        resolve(results)
      },
    )
  })
}

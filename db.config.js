const mysql = require('mysql2')
require('dotenv').config()

//Function use for connect DB
module.exports.connectDB = () => {
  try {
    const con = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
    })

    con.connect(function (err) {
      if (err) {
        console.log('error >>', err)
      } else {
        console.log('Connected!')
      }
    })

    return con
  } catch (error) {
    console.log('error >>', error)
    return error
  }
}

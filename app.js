const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

const { connectDB } = require('./db.config')
module.exports.mysql = connectDB()

require('dotenv').config()
const port = process.env.PORT || 5000
const routes = require('./route/userRoute.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send({ express: 'Hello From Express' });
});
app.use('/api', routes)


app.listen(port, () => console.log(`Login System backend app listening on port ${port}!`))

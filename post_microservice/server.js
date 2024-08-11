const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const {connect} = require('./config/mongoConnection')
const PORT = process.env.PORT
const routes = require('./routes/routes').routes

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api',routes)


connect().then(() =>{console.log("MongoDb Connected")})

app.listen(PORT,() =>{
    console.info(`listening to PORT= ${PORT}` )
})


const mongoose = require('mongoose')
require('dotenv').config

const connect = async() =>{
    try {
    return await mongoose.connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });       
    } catch (error) {
        console.error(error)
    }
}

module.exports = {connect}
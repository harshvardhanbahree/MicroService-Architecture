const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        index:true
    },
    title:{
        type:String
    },
    content:{
        type:String
    }
},{
    timestamps: true
})

const PostModel = mongoose.model("PostMicro", PostSchema)

module.exports = {PostModel}
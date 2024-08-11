
const {AuthMicroModel} = require('../models/auth')

const getUser = async(req, res) =>{
    const {userId} = req.params
    const user = await AuthMicroModel.findOne({_id:userId})

    return res.json({user:user}) 
}

module.exports = {getUser}
const {Router} = require('express')
const user = require('../controller/userController')

const userRoutes = Router({mergeParams:true})
                    .get('/getUser/:userId',user.getUser)

module.exports = {userRoutes}
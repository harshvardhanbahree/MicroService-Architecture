

const { Router } = require("express");
const postController = require('../controller/post')
const {authMiddleware} = require('../middleware/authMiddleware')

const routes = Router({ mergeParams: true })
.post('/posts',authMiddleware,postController.store)
.get('/get',authMiddleware, postController.get)


module.exports = { routes };
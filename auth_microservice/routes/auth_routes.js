const { Router } = require("express");
const authController = require("../controller/authController") 
const {authMiddleware} = require('../middleware/authMiddleware')

const authRoutes = Router({ mergeParams: true })
  .post("/auth/register", authController.register)
  .post("/auth/login", authController.login)
  .get("/auth/user",authMiddleware,authController.user)


module.exports = { authRoutes };

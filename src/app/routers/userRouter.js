const userRouter = require("express").Router()
const userController = require("../controllers/userController")

userRouter.post("/register", userController.register)
userRouter.post("/login", userController.login)
userRouter.post("/logout", userController.logout)
userRouter.get("/profile", userController.profile)

module.exports = userRouter
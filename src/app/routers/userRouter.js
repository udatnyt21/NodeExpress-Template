const userRouter = require("express").Router() // Get the router functions
const userController = require("../controllers/userController") // Get the controller to send requests to

//        method     path   controller function
userRouter.post("/register", userController.register)
userRouter.post("/login", userController.login)
userRouter.post("/logout", userController.logout)
userRouter.get("/profile", userController.profile)

userRouter.get("/registerGet", userController.registerGet)
userRouter.get("/loginGet", userController.loginGet)

//Export the router
module.exports = userRouter
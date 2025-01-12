const mainRouter = require("express").Router()

mainRouter.get(["/", "/index", "/index.html"], (req, res) => {res.render("index.ejs")})
//Send requests to correct routers
mainRouter.use("/user", require("./userRouter"))
// If I get a route I dont know, send it here
mainRouter.get("*", (req,res) => res.send("Error 404, Does Not exist"))

module.exports = mainRouter
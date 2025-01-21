const userModel = require("../models/userModel")

//      name        req,res    the actual function
exports.register = (req,res) => {
    const username = req.body.username.trim()
    const password = req.body.password.trim()
    const passwordCheck = req.body.passwordCheck.trim()

    if(!username || !password )
        return res.redirect("/user/registerGet")
    if(password != passwordCheck)
        return res.redirect("/user/registerGet")
    if(userModel.userExists(username))
        return res.redirect("/user/registerGet")

    userModel.register(username, password)

    return res.redirect("/user/loginGet")
}   

exports.login = (req,res) => {

    req.session.destroy()

    const username = req.body.username.trim()
    const password = req.body.password.trim()

    const user = userModel.userfromName(username);

    if(!username || !password)
            return res.redirect("/user/loginGet")
    if(!userModel.checkPassword(password, user.id))
        return res.redirect("/user/loginGet")

    req.session.loggedUser = user.username
    req.session.loggedID = user.id

    return res.redirect("/user/profile")
     
}

exports.logout = (req,res) => {

}

exports.profile = (req,res) => {

}

exports.registerGet = (req, res) => {
    res.render("./user/register.ejs")
}

exports.loginGet = (req, res) => {
    res.render("./user/login.ejs")
}
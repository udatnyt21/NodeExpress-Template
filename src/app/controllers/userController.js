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

    const username = req.body.username.trim()
    const password = req.body.password.trim()

    const user = userModel.userfromName(username);

    if(!username || !password)
            return res.redirect("/user/loginGet")
    if(!userModel.checkPassword(password, user.id))
        return res.redirect("/user/loginGet")

    req.session.user = {
        id: user.id,
        username: user.username
    };

    console.log(req.session.user)
    return res.redirect("/user/profile")
     
}

exports.logout = (req,res) => {
    req.session.destroy()

    res.redirect("/user/loginGet")

}

exports.profile = (req,res) => {
    console.log(req.session.user)

    if (!req.session.user)
        return res.redirect("/")

    res.render("./user/profile.ejs", {
        username: req.session.user.username
    })

}

exports.registerGet = (req, res) => {
    res.render("./user/register.ejs")
}

exports.loginGet = (req, res) => {
    res.render("./user/login.ejs")
}
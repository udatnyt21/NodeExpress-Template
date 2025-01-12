const userModel = require("../models/userModel")

//      name        req,res    the actual function
exports.register = (req,res) => {
    console.log("Register")
}

exports.login = (req,res) => {
    console.log("Login")
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
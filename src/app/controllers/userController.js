const userModel = require("../models/userModel")

//      name        req,res    the actual function
exports.register = (req,res) => {

}

exports.login = (req,res) => {

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
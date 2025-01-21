const bcrypt = require("bcryptjs") // For password hashing
const jsondb = require("simple-json-db") // Database
const db = new jsondb("../data/users.json") // Create/Load database file


// If database is empty, add the next id
if(!db.has("next_id"))
    db.set("next_id", 1)

exports.userExists = (username) => {
    const data = db.JSON()
    delete data["next_id"]

    for(let i in data){
        if(data[i].username == username)
            return true
    }
    return false
}

exports.register = (username, password) => {
    const id = db.get("next_id")
    const passwordHash = bcrypt.hashSync(password)
    db.set(id, {id, username, passwordHash})
    db.set("next_id", id+1)
}

exports.userfromName = (name) => {
    const data = db.JSON();
    for(let i in data){
        if(data[i].username == name)
            return db.get(i);
    }
}

exports.checkPassword = (passwordToCheck, id) => {
    password = db.get(id).passwordHash
    console.log(bcrypt.compareSync(passwordToCheck, password))
    return bcrypt.compareSync(passwordToCheck, password)
}
const bcrypt = require("bcrypt") // For password hashing
const jsondb = require("simple-json-db") // Database
const db = new jsondb("../data/users.json") // Create/Load database file


// If database is empty, add the next id
if(!db.has("next_id"))
    db.set("next_id", 1)
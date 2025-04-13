const app = require("./app")


let porta
if(process.env.port == undefined)
	porta = 8080
else
	porta = process.env.port

app.listen(porta, () => {
    console.log("Server is running on " + String(porta))
})
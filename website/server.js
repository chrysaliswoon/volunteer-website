require("dotenv").config()

const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const PORT = process.env.PORT
const path = require("path")

//? Middleware
app.use(express.json());
app.use(express.static("./client/build"))


//? Routes
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

app.get("/", (req, res) => {
    res.send("Working")
})

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})

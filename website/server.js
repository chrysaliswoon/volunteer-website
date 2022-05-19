require("dotenv").config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const PORT = process.env.PORT;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const saltRounds = 10;
const userLogin = require("./routes/userLogin")
const userRegister = require("./routes/userRegister")
const path = require("path");

//? Middleware
app.use(bodyParser.json()); // Parse the JSON body from the HTTP request
app.use("/login", userLogin);
app.use("/register", userRegister);
app.use(express.static("../build"));

//? Routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//? PORT Connection
app.listen(PORT, () => {
  console.log(`Authentication service started on ${PORT}`);
});

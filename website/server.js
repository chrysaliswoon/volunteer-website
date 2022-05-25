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
const cors = require("cors");
const event = require("./routes/events");

//? Middleware
//? NOTE: CORS needs to be placed before the routes in order for it to work
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost:3300",
      "https://zhyn-website.herokuapp.com/",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(bodyParser.json()); // Parse the JSON body from the HTTP request
app.use("/api/login", userLogin);
app.use("/api/register", userRegister);
app.use("/api/event/create", event);
app.use("/api/event", event)
app.use(express.static("./client/build"));

//? Routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


//? PORT Connection
app.listen(PORT, () => {
  console.log(`Authentication service started on ${PORT}`);
});


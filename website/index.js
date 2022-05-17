require("dotenv").config();
require("@prisma/client");

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const route = require("./routes");
const bodyParser = require("body-parser");
const multer = require("multer");

//? Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("./client/build"));

//? Redirect to routes/index.js
app.use('/', route);


app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

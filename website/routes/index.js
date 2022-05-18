const express = require('express');
const app = express.Router();
const auth = require('./auth');
const createError = require('http-errors');

//? Middleware
app.use('/auth', auth);

app.use(async (req, res, next) => {
  next(createError.NotFound('Route not Found'))
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: false, 
    message: err.message
  })
})

//? Routes
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

// app.get("/", (req, res) => {
//   res.send("Route is working!");
// });


module.exports = app;
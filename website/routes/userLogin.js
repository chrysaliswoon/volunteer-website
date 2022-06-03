require("dotenv").config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const login = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const createError = require("http-errors");

//? LOGIN Route
login.post("/", async (req, res) => {
  try {
    const authUser = await prisma.volunteer.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (!authUser) {
      res.send({msg: "User not found"});
    } else {
      if (bcrypt.compareSync(req.body.password, authUser.password)) {
        const accessToken = jwt.sign(
            { authUsername: authUser.authUsername, email: authUser.email, id: authUser.id },
            accessTokenSecret
          );
          res.cookie("jwt_token", accessToken, {
            expires: new Date(Date.now() + 16 * 3600000),
            path: "/",
            httpOnly: true,
          });
          res.status(200).send({ msg: "Logged in successfully!", accessToken });
      } else {
        res.send({ msg: "Invalid login credentials" });
        delete authUser.password;
      }
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }



  // const data = req.body;
  // const { email, password } = data;   // Read email from request body

  // const authUser = await prisma.volunteer.findUnique({   // Find authUser from the authUsers array by email
  //   where: {
  //     email: req.body.email,
  //   },
  // });

  // if (!authUser) {
  //   throw createError.NotFound('User not registered')
  // }

  // const checkPassword = bcrypt.compareSync(password, authUser.password);
  // if (!checkPassword) throw createError.Unauthorized('Email address or password not valid')

  // delete authUser.password;

  // const accessToken = jwt.sign(
  //   { authUsername: authUser.authUsername, email: authUser.email, id: authUser.id },
  //   accessTokenSecret
  // );
  // res.cookie("jwt_token", accessToken, {
  //   expires: new Date(Date.now() + 16 * 3600000),
  //   path: "/",
  //   httpOnly: true,
  // });
  // res.status(200).send({ msg: "Logged in successfully!", accessToken });
});

module.exports = login;

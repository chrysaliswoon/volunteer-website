require("dotenv").config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const login = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//? LOGIN Route

login.post("/", async (req, res) => {
  const data = req.body;
  // Read email from request body
  const { email, password } = data;

  // Find user from the users array by email
  const user = await prisma.volunteer.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    res.send("User not registered");
  }

  const checkPassword = bcrypt.compareSync(password, user.password);
  if (!checkPassword) res.send("Invalid Email address or password");

  delete user.password;

  const accessToken = jwt.sign(
    { username: user.username, email: user.email },
    accessTokenSecret
  );
  // res.json({
  //   accessToken,
  // });
  res.cookie("jwt_token", accessToken, {
    expires: new Date(Date.now() + 16 * 3600000),
    path: "/",
    httpOnly: true,
    // secure: true
  });
  res.status(200).send({ msg: "Logged in successfully!" });
  // prisma.$disconnect();
  // return { ...user, accessToken };
});

module.exports = login;

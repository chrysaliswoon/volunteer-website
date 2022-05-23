require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const register = express.Router();
const bcrypt = require("bcryptjs");
const saltRounds = 10;

//? REGISTER Routes

// register.post("/", async (req, res) => {
//   const data = req.body;
//   const { name, email } = data;
//   data.password = bcrypt.hashSync(data.password, saltRounds);

//   const newUser = await prisma.volunteer.create({
//     data,
//   });
//   delete newUser.password;
//   res.json(newUser);
//   // prisma.$disconnect();
// });

register.post("/", async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  try {
    // Finding if email exist in database
    const existingUser = await prisma.volunteer.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (!existingUser) {
      // Creates new user if email is not found
      const newUser = await prisma.volunteer.create({
        data: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
      });
      // Success message upon user creation
      delete newUser.password;
      res.status(200).send({ msg: "User created successfully!" });
    } else {
      res.send({ msg: "You have an existing account with us" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// register.post("/", async (req, res) => {
//   req.body.password = bcrypt.hashSync(req.body.password, saltRounds);

//   const user = await prisma.volunteer.create({
//     data: {
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password
//     },
//   });
//   res.json(user);
// })

module.exports = register;

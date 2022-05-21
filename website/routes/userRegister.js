require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const register = express.Router();
const bcrypt = require("bcryptjs");
const saltRounds = 10;

//? REGISTER Routes

register.post("/", async (req, res) => {
  const data = req.body;
  const { name, email } = data;
  data.password = bcrypt.hashSync(data.password, saltRounds);

  const newUser = await prisma.volunteer.create({
    data,
  });
  delete newUser.password;
  res.json(newUser);
  // prisma.$disconnect();
});

module.exports = register;

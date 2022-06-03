require("dotenv").config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const profile = express.Router();
  
  //? READ Profile Route
  profile.get("/:id", async (req, res) => {
    const findProfile = await prisma.profile.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.json(findProfile);
  });
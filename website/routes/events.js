require("dotenv").config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const eventCreate = express.Router();
const eventRead = express.Router();


//? CREATE Event Route

eventCreate.post("/", async (req, res) => {
  const startDateISO = new Date(req.body.eventStart).toISOString()
  const endDateISO = new Date(req.body.eventEnd).toISOString()
  
  try {
    const newEvent = await prisma.events.create({
      data: {
        eventTitle: req.body.eventTitle,
        eventDescription: req.body.eventDescription,
        eventStart: startDateISO,
        eventEnd: endDateISO,
        volunteersRequired: parseInt(req.body.volunteersRequired),
        eventStatus: req.body.eventStatus,
        creatorId: 1, //? Need to change this to detect the current logged in user
      },
    });
    res.status(200).send({ msg: "Event created!" })
  } catch (error) {
    res.status(400).send({ msg: error.message })
  }
})

//? READ Event Route

eventRead.get("/", async (req, res) => {
  const events = await prisma.events.findMany({
    where: {
      eventStatus: "published",
    },
  });
  res.json(events)
})

//? UPDATE Event Route



//? DELETE Event Route

module.exports = {eventCreate, eventRead};

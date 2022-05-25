require("dotenv").config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const eventCreate = express.Router();

//? CREATE EVENT Route

// eventCreate.post("/", async (req, res) => {
//   try {
//     const createEvent = await prisma.events.create({
//       data: {
//         eventTitle: req.body.eventTitle,
//         eventDescription: req.body.eventDescription,
//         eventStart: req.body.eventStart,
//         eventEnd: req.body.eventEnd,
//         volunteersRequired: req.body.volunteersRequired,
//         eventStatus: "Active",
//         creator: req.body.creator,
//       },
//     });
//     res.send({ msg: "Event created successfully" });
//   } catch (error) {
//     res.status(400).send({ msg: error.message });
//   }
// });



eventCreate.post("/", async (req, res) => {
  const startDateStr = req.body.eventStart;
  const endDateStr = req.body.eventEnd
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr)
  const startDateISO = startDate.toISOString()
  const endDateISO = endDate.toISOString()
  
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

module.exports = eventCreate;

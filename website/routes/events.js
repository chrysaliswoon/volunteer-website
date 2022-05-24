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
  const createEvent = await prisma.events.create({
    data: {
          eventTitle: req.body.eventTitle,
          eventDescription: req.body.eventDescription,
          eventStart: req.body.eventStart,
          eventEnd: req.body.eventEnd,
          volunteersRequired: req.body.volunteersRequired,
          eventStatus: "Active",
      },
      include: {
          volunteer: true
      }
  });
  res.status(200).send({ msg: "Event created successfully!" });
});

module.exports = eventCreate;

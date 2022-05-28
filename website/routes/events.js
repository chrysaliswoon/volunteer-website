require("dotenv").config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const event = express.Router();

//? CREATE Event Route

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

event.post("/create", async (req, res) => {
  const startDateISO = new Date(req.body.eventStart).toISOString();
  const endDateISO = new Date(req.body.eventEnd).toISOString();
  // console.log(req.cookies);
  const userId = parseJwt(req.cookies.jwt_token)

    try {
      const newEvent = await prisma.events.create({
        data: {
          eventTitle: req.body.eventTitle,
          eventDescription: req.body.eventDescription,
          eventLocation: req.body.eventLocation,
          eventStart: startDateISO,
          eventEnd: endDateISO,
          volunteersRequired: parseInt(req.body.volunteersRequired),
          eventStatus: req.body.eventStatus,
          creatorId: userId.id, //? Need to change this to detect the current logged in user
        },
      });
      res.status(200).send({ msg: "Event created!" });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
});

//? READ Event Route

event.get("/", async (req, res) => {
  const allEvents = await prisma.events.findMany({
    where: {
      eventStatus: "published",
    },
  });
  res.json(allEvents);
});

event.get("/:id", async (req, res) => {
  const findEvent = await prisma.events.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json(findEvent);
});

//? UPDATE Event Route

event.put("/:id", async (req, res) => {
  const startDateISO = new Date(req.body.eventStart).toISOString();
  const endDateISO = new Date(req.body.eventEnd).toISOString();

  const updateEvent = await prisma.events.updateMany({
    where: {
      id: Number(req.params.id),
    },
    data: {
      eventTitle: req.body.eventTitle,
      eventDescription: req.body.eventDescription,
      eventLocation: req.body.eventLocation,
      eventStart: startDateISO,
      eventEnd: endDateISO,
      volunteersRequired: parseInt(req.body.volunteersRequired),
      eventStatus: req.body.eventStatus,
    },
  });
  res.status(200).send({ msg: "Event updated!" });
});

//? DELETE Event Route

event.delete("/:id", async (req, res) => {
  const deleteEvent = await prisma.events.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.status(200).send({ msg: "Event deleted!" });
});

module.exports = event;

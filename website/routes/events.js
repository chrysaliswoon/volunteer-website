require("dotenv").config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const event = express.Router();

//? CREATE Event Route

event.post("/", async (req, res) => {
  const startDateISO = new Date(req.body.eventStart).toISOString();
  const endDateISO = new Date(req.body.eventEnd).toISOString();

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
        creatorId: 1, //? Need to change this to detect the current logged in user
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
      id: req.body.id,
    },
  });
  res.json(findEvent);
});

//? UPDATE Event Route

event.put("/:id", async (req, res) => {
  const startDateISO = new Date(req.body.eventStart).toISOString();
  const endDateISO = new Date(req.body.eventEnd).toISOString();

  const updateEvent = await prisma.events.update({
    where: {
      id: req.body.id,
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
});

//? DELETE Event Route

event.delete("/:id", async (req, res) => {
  const deleteEvent = await prisma.events.delete({
    where: {
      id: req.body.id,
    },
  });
  res.status(200).send({ msg: "Event deleted!" });
});

module.exports = event;

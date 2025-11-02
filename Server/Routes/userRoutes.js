const express = require("express");
const router = express.Router();


const { getEventDetails, createEvent,GetEventById } = require("../controllers/userController");

router.get("/api/events", getEventDetails);
router.get("/api/events/:EventId", GetEventById);
router.post("/api/events", createEvent);

module.exports = router;

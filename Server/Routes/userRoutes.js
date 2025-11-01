const express = require("express");
const router = express.Router();


const { getEventDetails, createEvent } = require("../Controllers/userController");

router.get("/eventDetails", getEventDetails);
router.post("/createEvent", createEvent);

module.exports = router;

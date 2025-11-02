const express = require("express");
const router = express.Router();


const { getEventDetails, createEvent } = require("../controllers/userController");

router.get("/api/events", getEventDetails);
router.post("/api/events", createEvent);

module.exports = router;

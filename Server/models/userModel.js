const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  EventTitle: { type: String, required: true },
  Description: { type: String, required: true },
  Location: { type: String, required: true, },
  DateAndTime: { type: Date, required: true, },
  MaxParticipants: { type: Number, required: true, },
  CurrentParticipants: { type: Number, required: true, },
  Progress: { type: Number,default:0 },
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;

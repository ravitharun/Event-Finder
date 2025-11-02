
const Event = require("../models/userModel");


// get the event details
const getEventDetails = async (req, res) => {
  try {
    // get the all events from db
    const GetEventDetails = await Event.find({})
    // validate the json data based on the length <=0 --> no data found 
    if (GetEventDetails.length <= 0) {
      return res.status(200).json({ message: "No event Found " })
    }
    res.status(200).json({ message: GetEventDetails });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// createEvent route to save the form data of the Event
const createEvent = async (req, res) => {
  try {
    const { FormData } = req.body;
    console.log(FormData, "FormData");
    // validate the data 
    if (!FormData.EventTitle && !FormData.Description && !FormData.Location && !FormData.MaxParticipants && !FormData.CurrentParticipants) {
      return res.status(404).json({ message: "Missing The Feilds Of The Input." })
    }
    // Make use of schema db model
    const Eventmodel = await new Event({
      EventTitle: FormData.EventTitle,
      Description: FormData.Description,
      Location: FormData.Location,
      DateAndTime: FormData.DateAndTime,
      MaxParticipants: Number(FormData.MaxParticipants),
      CurrentParticipants: Number(FormData.CurrentParticipants),
      Progress: Number(FormData.Progress),
    })

    // save in the db
    await Eventmodel.save()
    res.status(200).json({ message: "The data is saved  in the Db" })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// GeteventByid
const GetEventById = async (req, res) => {
  try {
    const { EventId } = req.params; // expects route like /events/:id
   
    if (!EventId) {
      return res.status(400).json({ message: "Event ID not provided" });
    }

    const event = await Event.findById({_id:EventId});
    console.log(event, 'event')

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({message:event});
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getEventDetails, createEvent, GetEventById };

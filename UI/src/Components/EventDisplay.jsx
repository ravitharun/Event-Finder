import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import Form from "./Form";
import { errornotify, successnotify } from "./Toast";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
function EventDisplay() {
  const [isOpen, setOpen] = useState(false);

  // Sample events
  const [events, setevents] = useState([
    {
      id: 1,
      title: "Frontend Jam: Tailwind Workshop",
      description:
        "Hands-on Tailwind CSS workshop where participants learn to build responsive layouts and UI components using Tailwind CSS.",
      location: "Bangalore, India",
      date: "2025-11-15T14:00:00",
      maxParticipants: 40,
      currentParticipants: 18,
    },
    {
      id: 2,
      title: "Design Critique Circle",
      description:
        "Join a group of designers and developers for open discussions and constructive feedback on your latest design projects.",
      location: "Online (Zoom)",
      date: "2025-11-22T17:30:00",
      maxParticipants: 25,
      currentParticipants: 20,
    },
    {
      id: 3,
      title: "Weekend Hackathon — Mini Apps",
      description:
        "Collaborate with peers to create innovative mini apps in 24 hours. Showcase your creativity and problem-solving skills!",
      location: "College Auditorium",
      date: "2025-12-05T09:00:00",
      maxParticipants: 100,
      currentParticipants: 64,
    },
  ]);

  // Prevent background scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const getevent = async () => {
      try {
        const getdata = await axios.get('http://localhost:3000/api/events');
        console.log(getdata.data.message)
        setevents(getdata.data.message)
        successnotify("data fetched")
      }
      catch (err) {

        errornotify(err.message)
      }
    }
    getevent()
  }, [])


  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  // HandelDetails
  const naviaget = useNavigate("")
  const HandelDetails = (EventId) => {
    console.log(EventId, 'EventId')

    naviaget("/evnetDetails", { state: { EventId: EventId } });

  }
  return (
    <>
      {/* Add Event Button */}
      <div className="flex justify-end p-6">
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          + Add Event
        </button>
      </div>
      <Toaster position="top-center" />

      {/* Popup Modal */}

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50 animate-fadeIn">
          <div className="relative bg-white/95 backdrop-blur-xl border border-gray-200 
                    w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%] 
                    h-auto max-h-[80vh] rounded-2xl shadow-2xl p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-700 mb-4">
              Create New Event
            </h2>

            {/* Form inside smaller modal */}
            <div className="overflow-y-auto max-h-[60vh]">
              <Form />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-indigo-600 transition text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}



      {/* Event Cards */}
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-8">
        <div className="flex justify-center items-center gap-2 mb-10">
          <MdEventAvailable className="text-4xl text-indigo-600 animate-bounce" />
          <h1 className="text-4xl font-bold text-indigo-700 text-center">
            Upcoming Events
          </h1>
        </div>

        {events.length <= 0 ? (
          <div className="text-center text-gray-500 text-lg mt-10">
            🎭 No events found
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => {
              const progress = Math.round(
                (event.CurrentParticipants / event.MaxParticipants) * 100
              );

              return (
                <div
                  key={event._id}
                  className="group relative bg-gradient-to-br from-indigo-50 to-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col justify-between"
                >
                  {/* Decorative Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl bg-gradient-to-r from-indigo-200 via-purple-200 to-transparent rounded-2xl" />

                  <div className="relative z-10">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                      {event.EventTitle}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {event.Description}
                    </p>

                    {/* Location & Date */}
                    <div className="space-y-1 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-indigo-500" />
                        <span>{event.Location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-indigo-500" />
                        <span>{formatDate(event.DateAndTime)}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <FaUserFriends className="text-indigo-500" />
                          {event.CurrentParticipants}/{event.MaxParticipants} joined
                        </span>
                        <span>{progress}% filled</span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="relative z-10 flex justify-between items-center mt-6">
                    <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300" onClick={()=>successnotify("adding soon.")}>
                      Join Now
                    </button>

                    <button
                      onClick={() => HandelDetails(event._id)}
                      className="text-sm text-indigo-600 font-medium hover:text-purple-600 transition-colors underline"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }
        `}
      </style>
    </>
  );
}

export default EventDisplay;

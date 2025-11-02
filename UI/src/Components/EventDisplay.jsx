import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import Form from "./Form";

function EventDisplay() {
  const [isOpen, setOpen] = useState(false);

  const events = [
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
  ];

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

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50 animate-fadeIn">
          <div className="relative bg-white/95 backdrop-blur-xl border border-gray-200 w-[90%] md:w-[55%] lg:w-[45%] rounded-3xl shadow-2xl p-8 overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-700 mb-4">
              Create New Event
            </h2>

            {/* Form Component (Zoomed Out) */}
            <div className="transform scale-90 origin-top">
              <Form />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-indigo-600 transition text-2xl"
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            const progress = Math.round(
              (event.currentParticipants / event.maxParticipants) * 100
            );

            return (
              <div
                key={event.id}
                className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition-colors">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                    <FaMapMarkerAlt className="text-indigo-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <FaCalendarAlt className="text-indigo-500" />
                    {formatDate(event.date)}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mb-4 items-center">
                    <span className="flex items-center gap-1">
                      <FaUserFriends className="text-indigo-500" />
                      {event.currentParticipants}/{event.maxParticipants} joined
                    </span>
                    <span>{progress}% filled</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-3">
                  <button className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:scale-105 transition">
                    Join
                  </button>
                  <button className="text-sm text-gray-600 hover:text-indigo-600 hover:underline transition">
                    View Details →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
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

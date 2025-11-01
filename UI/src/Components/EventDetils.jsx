import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

function EventDetails() {
  // Sample event (you can later pass it as props or fetch by ID)
  const event = {
    title: "Frontend Jam: Tailwind Workshop",
    description:
      "A hands-on workshop designed to help developers master Tailwind CSS. Participants will build responsive layouts and modern UI components from scratch while learning best practices for utility-first CSS.",
    location: "Bangalore, India",
    date: "2025-11-15T14:00:00",
    maxParticipants: 40,
    currentParticipants: 18,
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const progress = Math.round(
    (event.currentParticipants / event.maxParticipants) * 100
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl max-w-3xl w-full p-8 border border-gray-100">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <MdEvent className="text-4xl text-indigo-600" />
          <h1 className="text-3xl font-bold text-indigo-700">{event.title}</h1>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">
          {event.description}
        </p>

        {/* Info Section */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-gray-600 text-lg">
            <FaMapMarkerAlt className="text-indigo-500" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-lg">
            <FaCalendarAlt className="text-indigo-500" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-lg">
            <FaUsers className="text-indigo-500" />
            <span>
              {event.currentParticipants}/{event.maxParticipants} Participants
              Joined
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Event Capacity</span>
            <span>{progress}% Filled</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-indigo-600 h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Buttons (UI only) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Join Event
          </button>
          <button className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition">
            Back to Events
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;

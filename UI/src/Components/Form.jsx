import React, { useRef } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { errornotify, successnotify } from "./Toast";
import axios from "axios";

function Form() {
  const EventTitle = useRef("");
  const Description = useRef("");
  const Location = useRef("");
  const DateAndTime = useRef("");
  const MaxParticipants = useRef("");
  const CurrentParticipants = useRef("");
  const DefaultProgress = 0;

  const handleFormdata = async (e) => {
    e.preventDefault();
    try {
      const FormData = {
        EventTitle: EventTitle.current.value,
        Description: Description.current.value,
        Location: Location.current.value,
        DateAndTime: DateAndTime.current.value,
        MaxParticipants: MaxParticipants.current.value,
        CurrentParticipants: CurrentParticipants.current.value,
        Progress: DefaultProgress,
      };

      const response = await axios.post("http://localhost:3000/api/events", {
        FormData,
      });
      successnotify(response.data.message);
    } catch (err) {
      errornotify(err.message);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleFormdata}
        className="space-y-6 text-gray-800"
      >
        <Toaster position="top-center" reverseOrder="false"></Toaster> 
        {/* Event Title */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Event Title <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-400">
            <FaUser className="text-indigo-500 mr-3" />
            <input
              ref={EventTitle}
              type="text"
              placeholder="Enter event title"
              required
              className="w-full outline-none bg-transparent placeholder-gray-400"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Location <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-400">
            <FaMapMarkerAlt className="text-indigo-500 mr-3" />
            <input
              ref={Location}
              type="text"
              placeholder="Enter location"
              required
              className="w-full outline-none bg-transparent placeholder-gray-400"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <div className="flex items-start border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-400">
            <FaFileAlt className="text-indigo-500 mt-1 mr-3" />
            <textarea
              ref={Description}
              rows="3"
              placeholder="Write a short description..."
              required
              className="w-full outline-none bg-transparent placeholder-gray-400 resize-none"
            ></textarea>
          </div>
        </div>

        {/* Date & Time */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Date & Time <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-400">
            <FaCalendarAlt className="text-indigo-500 mr-3" />
            <input
              ref={DateAndTime}
              type="datetime-local"
              required
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Participants */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Participants <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-full focus-within:ring-2 focus-within:ring-indigo-400">
              <FaUsers className="text-indigo-500 mr-3" />
              <input
                ref={MaxParticipants}
                type="number"
                min="1"
                placeholder="Max Participants"
                required
                className="w-full outline-none bg-transparent placeholder-gray-400"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-full focus-within:ring-2 focus-within:ring-indigo-400">
              <FaUsers className="text-indigo-500 mr-3" />
              <input
                ref={CurrentParticipants}
                type="number"
                min="0"
                placeholder="Current Participants"
                required
                className="w-full outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300"
        >
          Submit Event
        </button>
      </form>

      <Toaster position="top-center" />
    </div>
  );
}

export default Form;

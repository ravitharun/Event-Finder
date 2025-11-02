import React, { useRef } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa";
import { errornotify, successnotify } from "./Toast";
import { Toaster } from "react-hot-toast";
import axios from "axios";

function Form() {
  const EventTitle = useRef("");
  const Description = useRef("");
  const Location = useRef("");
  const DateAndTime = useRef("");
  const MaxParticipants = useRef("");
  const CurrentParticipants = useRef("");
  const DefaultProgress = 0;

  const handelFormdata = async (e) => {
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
      const response = await axios.post("http://localhost:3000/createEvent", {
        FormData,
      });
      successnotify(response.data.message);
    } catch (err) {
      errornotify(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl border border-gray-100 p-10 animate-fadeIn backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Create <span className="text-indigo-600">New Event</span>
        </h2>

        <form onSubmit={handelFormdata} className="space-y-10">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event Title */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Event Title <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                <FaUser className="text-indigo-500 mr-3" />
                <input
                  ref={EventTitle}
                  type="text"
                  placeholder="Enter event title"
                  required
                  className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Location */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                <FaMapMarkerAlt className="text-indigo-500 mr-3" />
                <input
                  ref={Location}
                  type="text"
                  placeholder="Enter location"
                  required
                  className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <div className="flex items-start bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
              <FaFileAlt className="text-indigo-500 mt-1 mr-3" />
              <textarea
                ref={Description}
                rows="3"
                placeholder="Write a short description about your event..."
                required
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Date & Time */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Date & Time <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                <FaCalendarAlt className="text-indigo-500 mr-3" />
                <input
                  ref={DateAndTime}
                  type="datetime-local"
                  required
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
            </div>

            {/* Participants */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Max Participants <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                  <FaUsers className="text-indigo-500 mr-3" />
                  <input
                    ref={MaxParticipants}
                    type="number"
                    min="1"
                    placeholder="Max count"
                    required
                    className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Current Participants <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                  <FaUsers className="text-indigo-500 mr-3" />
                  <input
                    ref={CurrentParticipants}
                    type="number"
                    min="0"
                    placeholder="Current count"
                    required
                    className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all"
          >
            Submit Event
          </button>
        </form>
      </div>

      <Toaster position="top-center" reverseOrder={false} />

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out;
          }
        `}
      </style>
    </div>
  );
}
export default Form;

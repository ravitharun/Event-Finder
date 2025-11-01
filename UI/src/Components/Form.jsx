import React from "react";
import { FaUser, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

function Form() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-lg shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Event Registration Form
        </h2>

        <form className="space-y-6">
          {/* Event Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Event Title <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2 focus-within:border-indigo-500">
              <FaUser className="text-indigo-500" />
              <input
                type="text"
                placeholder="Enter event title"
                required
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <div className="flex items-start gap-3 border border-gray-300 rounded-lg px-3 py-2 focus-within:border-indigo-500">
              <FaEnvelope className="text-indigo-500 mt-1" />
              <textarea
                placeholder="Enter a short description"
                required
                rows="3"
                className="w-full outline-none text-gray-700 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2 focus-within:border-indigo-500">
              <FaMapMarkerAlt className="text-indigo-500" />
              <input
                type="text"
                placeholder="Enter event location"
                required
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Date & Time <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2 focus-within:border-indigo-500">
              <FaCalendarAlt className="text-indigo-500" />
              <input
                type="datetime-local"
                required
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Participants */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Max Participants <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2 focus-within:border-indigo-500">
                <FaUsers className="text-indigo-500" />
                <input
                  type="number"
                  min="1"
                  placeholder="Enter max count"
                  required
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Current Participants <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2 focus-within:border-indigo-500">
                <FaUsers className="text-indigo-500" />
                <input
                  type="number"
                  min="0"
                  placeholder="Enter current count"
                  required
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Submit Button (UI only) */}
          <button
            type="button"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;

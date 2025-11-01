import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";

function EventDisplay() {
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
    {
      id: 4,
      title: "React Beginners Meetup",
      description:
        "A meetup for aspiring React developers to learn about components, hooks, and project structure with live examples.",
      location: "Hyderabad, India",
      date: "2025-11-25T10:00:00",
      maxParticipants: 50,
      currentParticipants: 32,
    },
    {
      id: 5,
      title: "AI in Web Development",
      description:
        "Explore how AI tools are transforming frontend workflows. Topics include AI-assisted coding, design, and automation.",
      location: "Chennai, India",
      date: "2025-12-12T16:00:00",
      maxParticipants: 80,
      currentParticipants: 56,
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-8">
      <div className="flex justify-center items-center gap-2 mb-10">
        <MdEventAvailable className="text-4xl text-indigo-600" />
        <h1 className="text-4xl font-bold text-center text-indigo-700">
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
              className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition">
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
                    className="bg-indigo-500 h-2 rounded-full transition-all"
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

              {/* Static Buttons */}
              <div className="flex justify-between items-center mt-3">
                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition">
                  Join
                </button>

                <button className="text-sm text-gray-600 hover:text-indigo-600 transition">
                  View Details →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventDisplay;

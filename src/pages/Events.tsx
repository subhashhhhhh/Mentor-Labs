import React from 'react';
import { Calendar, Clock, MapPin, Users, Video } from 'lucide-react';

// Sample event data (replace with actual event data)
const upcomingEvents = [
  {
    title: "Founder Fireside Chat: Scaling Your SaaS",
    date: "October 25, 2024",
    time: "6:00 PM - 7:30 PM PST",
    location: "Online Webinar",
    type: "Webinar",
    icon: <Video className="h-6 w-6 text-purple-600" />,
    description: "Join us for an insightful chat with successful SaaS founders on navigating the challenges of scaling.",
    registerLink: "#"
  },
  {
    title: "Investor Pitch Practice Session",
    date: "November 8, 2024",
    time: "1:00 PM - 4:00 PM PST",
    location: "Mentor Labs HQ + Virtual Option",
    type: "Workshop",
    icon: <Users className="h-6 w-6 text-blue-600" />,
    description: "Refine your pitch and get direct feedback from experienced investors and mentors. Limited spots available.",
    registerLink: "#"
  },
  {
    title: "Growth Marketing Masterclass",
    date: "November 22, 2024",
    time: "10:00 AM - 12:00 PM PST",
    location: "Online Workshop",
    type: "Workshop",
    icon: <Calendar className="h-6 w-6 text-green-600" />,
    description: "Learn actionable growth marketing strategies to acquire and retain customers for your startup.",
    registerLink: "#"
  }
];

const pastEvents = [
  {
    title: "Networking Night: Connect & Collaborate",
    date: "September 15, 2024",
    description: "A successful evening connecting founders, mentors, and partners from the Mentor Labs ecosystem."
  },
  {
    title: "Building a Winning Team Workshop",
    date: "August 30, 2024",
    description: "Insights and practical advice on hiring, culture building, and team management for early-stage startups."
  }
];

const Events = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Events & Workshops
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Join our community of innovators. Connect, learn, and grow with Mentor Labs events.
          </p>
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.length > 0 ? upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden md:flex transform transition duration-300 hover:shadow-xl">
                <div className="md:w-1/4 bg-blue-50 p-6 flex flex-col items-center justify-center text-center">
                  <div className="mb-2">{event.icon}</div>
                  <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">{event.type}</p>
                  <p className="text-lg font-bold text-gray-900">{event.date.split(", ")[0]}</p>
                  <p className="text-sm text-gray-600">{event.date.split(", ")[1]}</p>
                </div>
                <div className="p-6 md:w-3/4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock className="h-4 w-4 mr-2" /> {event.time}
                      <MapPin className="h-4 w-4 mx-2" /> {event.location}
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                  </div>
                  <a 
                    href={event.registerLink}
                    className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300 text-center md:text-left md:self-start"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            )) : (
              <p className="text-gray-600 text-center">No upcoming events scheduled currently. Check back soon!</p>
            )}
          </div>
        </div>

        {/* Past Events Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Past Events</h2>
          <div className="space-y-4">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-gray-700 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events; 
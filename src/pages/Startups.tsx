import React from 'react';
import { ExternalLink } from 'lucide-react';

const startups = [
  {
    name: "TechVision AI",
    description: "AI-powered analytics platform revolutionizing business intelligence through advanced machine learning algorithms and intuitive dashboards.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    category: "Artificial Intelligence"
  },
  {
    name: "EcoSmart Solutions",
    description: "Developing sustainable technology solutions for smart cities, focusing on renewable energy integration and waste management optimization.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    category: "Sustainability"
  },
  {
    name: "HealthTech Innovations",
    description: "Revolutionary healthcare management platform that streamlines patient care through digital health records and AI-assisted diagnostics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    category: "Healthcare"
  },
  {
    name: "FinFlow",
    description: "Next-generation financial technology platform providing automated investment solutions and personalized financial planning.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    category: "FinTech"
  },
  {
    name: "EduTech Plus",
    description: "Innovative education technology platform combining adaptive learning algorithms with interactive content delivery.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    category: "Education"
  },
  {
    name: "LogiSync",
    description: "Supply chain optimization platform using blockchain technology for enhanced transparency and efficiency.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    category: "Logistics"
  }
];

function Startups() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio Startups</h1>
          <p className="text-xl text-gray-600">Discover innovative companies that have grown with our mentorship</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={startup.image}
                  alt={startup.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg">
                  {startup.category}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{startup.name}</h2>
                <p className="text-gray-600 mb-4">{startup.description}</p>
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Startups;
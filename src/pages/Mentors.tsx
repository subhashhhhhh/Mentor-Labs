import React from 'react';

// Placeholder mentor data extracted from Home.tsx - add more details/actual bios later
const mentorsData = [
  {
    name: "Dr. Prashant Singh Rana",
    role: "Technology Innovation Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Dr. Rana brings years of experience in cutting-edge technology development and innovation strategy, helping startups navigate complex technical landscapes."
  },
  {
    name: "Tathagat Kumar",
    role: "Business Strategy & Growth Advisor",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Tathagat specializes in crafting effective business models, market entry strategies, and scaling operations for sustainable growth."
  },
  {
    name: "Dr. Saif Nalband",
    role: "Market Research & Validation Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Dr. Nalband excels in market analysis, customer validation, and identifying product-market fit to ensure startups build solutions users need."
  }
  // Add more mentors as needed
];

const Mentors = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Mentors & Team</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our strength lies in our experienced mentors and dedicated team, committed to guiding founders through the challenges of building and scaling a successful startup.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {mentorsData.map((mentor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img
              src={mentor.image}
              alt={`Portrait of ${mentor.name}`}
              className="w-full h-72 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">{mentor.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{mentor.role}</p>
              <p className="text-gray-700 text-sm">{mentor.bio}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Add a section for the core team if different from mentors */}
      {/* <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Core Team</h2>
        <p className="text-lg text-gray-600">The driving force behind Mentor Labs operations.</p>
        [Team member profiles go here]
      </div> */}
    </div>
  );
};

export default Mentors; 
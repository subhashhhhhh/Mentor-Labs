import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Briefcase, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

// Placeholder program data
export const programsData = [
  {
    id: "ignite",
    title: "Ignite: Pre-Seed Program",
    icon: <Zap className="h-10 w-10 text-blue-600" />,
    description: "For early-stage founders with an idea. Focuses on validation, MVP development, and initial market testing.",
    duration: "3 Months",
    keyFeatures: ["Idea Validation Workshops", "MVP Building Support", "Early Adopter Access"],
  },
  {
    id: "launchpad",
    title: "Launchpad: Seed Stage Accelerator",
    icon: <Briefcase className="h-10 w-10 text-green-600" />,
    description: "Designed for startups with an MVP seeking product-market fit and initial funding. Intensive mentorship and network access.",
    duration: "4 Months",
    keyFeatures: ["Product-Market Fit Strategy", "Investor Readiness Training", "Seed Funding Connections"],
  },
  {
    id: "scaleup",
    title: "ScaleUp: Growth Program",
    icon: <TrendingUp className="h-10 w-10 text-purple-600" />,
    description: "For established startups ready to scale operations, expand teams, and enter new markets.",
    duration: "6 Months",
    keyFeatures: ["Scaling Operations Blueprint", "Leadership Development", "International Market Entry"],
  },
  {
    id: "nexus",
    title: "Nexus: Industry Connect",
    icon: <Users className="h-10 w-10 text-yellow-600" />,
    description: "Connects mature startups with strategic corporate partners, investors, and acquisition opportunities.",
    duration: "Ongoing",
    keyFeatures: ["Curated Partner Intros", "Investor Demo Days", "M&A Advisory"],
  },
  {
    id: "innovate",
    title: "Innovate: Sector Specific Labs",
    icon: <Award className="h-10 w-10 text-red-600" />,
    description: "Deep dives into specific sectors like FinTech, HealthTech, or SaaS with specialized mentors and resources.",
    duration: "Varies",
    keyFeatures: ["Sector Expert Mentors", "Targeted Resource Library", "Industry Challenges"],
  }
];

const Programs = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Mentorship Programs
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Tailored support for every stage of your startup journey, from idea to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programsData.map((program) => (
            <div 
              key={program.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="p-8 flex-grow">
                <div className="mb-5">{program.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{program.title}</h2>
                <p className="text-gray-600 mb-5 flex-grow">{program.description}</p>
                <div className="mb-5">
                  <span className="text-sm font-semibold text-gray-500 mr-4">Duration: {program.duration}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-6">
                  {program.keyFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-100 px-8 py-4">
                <Link
                  to={`/programs/${program.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
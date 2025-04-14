import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

// Import the program data (adjust path if necessary)
// Note: Ideally, this data would come from an API or a shared data store
//       rather than being imported directly from another page component.
import { programsData } from './Programs'; // Now correctly exported

// Define type for Program data (can be refined)
interface Program {
  id: string;
  title: string;
  icon: React.ReactNode; // Assuming icon is a React node
  description: string;
  duration: string;
  keyFeatures: string[];
  // Add other fields if they exist in programsData
}

const ProgramDetail = () => {
  const { programId } = useParams<{ programId: string }>();
  
  // Find the program data based on the programId from the URL
  // Explicitly type the parameter in the find method
  const program = programsData.find((p: Program) => p.id === programId);

  // Placeholder image URL (replace with program-specific images if available)
  const imageUrl = `https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`;

  // Handle case where program is not found
  if (!program) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Program Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find details for the program ID "{programId}".</p>
        <Link 
          to="/programs"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Programs
        </Link>
      </div>
    );
  }

  // Render program details if found
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            to="/programs"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition duration-200 group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:text-blue-600" />
            Back to All Programs
          </Link>
        </div>

        <div className="lg:flex lg:items-start lg:gap-12">
          {/* Left Column: Image */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <img 
              src={imageUrl}
              alt={`${program.title} concept image`}
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </div>

          {/* Right Column: Details */}
          <div className="lg:w-2/3">
            <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-3 inline-block">
              Duration: {program.duration}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
              {program.title}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {program.description}
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features & Benefits</h2>
            <ul className="space-y-3 mb-10">
              {program.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Call to Action */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ready to Apply?</h3>
              <p className="text-gray-600 mb-5">
                Take the next step in your startup journey. Learn more about the application process or contact us with questions.
              </p>
              <Link 
                to="/contact" // Or link to a specific application page if available
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Apply Now or Ask Questions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail; 
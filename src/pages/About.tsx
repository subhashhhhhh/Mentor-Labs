import React from 'react';
import { Target, Users, TrendingUp, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About Mentor Labs
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Nurturing the next generation of innovators through dedicated mentorship and strategic support.
          </p>
        </div>

        {/* Our Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Mentor Labs is a startup incubator focused on empowering founders. We bridge the gap between innovative ideas and market success by providing unparalleled mentorship, resources, and a supportive community designed to accelerate startup growth.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">
              To be the leading launchpad for transformative startups, fostering an ecosystem where entrepreneurial vision translates into global impact.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team collaborating"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>

        {/* What We Do Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Sets Us Apart</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {
            [
              {
                icon: <Users className="h-10 w-10 text-blue-600 mb-4" />,
                title: "Expert Mentorship",
                description: "Access to a curated network of seasoned industry veterans and successful entrepreneurs."
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-blue-600 mb-4" />,
                title: "Tailored Programs",
                description: "Customized support programs designed to meet startups at their specific stage of development."
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />,
                title: "Growth Focused",
                description: "Emphasis on strategic growth, market validation, and achieving key milestones."
              },
              {
                icon: <Target className="h-10 w-10 text-blue-600 mb-4" />,
                title: "Community & Network",
                description: "A collaborative environment connecting founders with peers, investors, and partners."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import { BookOpen, Wrench, FileText, Link as LinkIcon } from 'lucide-react'; // Use Wrench instead of Tool

const resourceCategories = [
  {
    title: "Business Planning & Strategy",
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    resources: [
      { name: "Lean Canvas Template", type: "Template", url: "https://www.canva.com/templates/search/lean-canvas/" },
      { name: "Guide to Market Research", type: "Guide", url: "https://blog.hubspot.com/marketing/market-research-guide" },
      { name: "Pitch Deck Examples (Sequoia)", type: "Examples", url: "https://www.sequoiacap.com/article/writing-a-business-plan/" },
    ]
  },
  {
    title: "Funding & Investment",
    icon: <FileText className="h-8 w-8 text-green-600" />,
    resources: [
      { name: "Term Sheet Basics (TechCrunch)", type: "Article", url: "https://techcrunch.com/2021/07/15/term-sheet-basics-what-is-a-term-sheet/" },
      { name: "AngelList (Investor Platform)", type: "Platform", url: "https://angel.co/" },
      { name: "Cap Table Simulator (Carta)", type: "Tool", url: "https://carta.com/blog/cap-table-basics/" },
    ]
  },
  {
    title: "Product Development Tools",
    icon: <Wrench className="h-8 w-8 text-purple-600" />,
    resources: [
      { name: "Prototyping Tools Overview (Figma)", type: "Platform", url: "https://www.figma.com/prototyping/" },
      { name: "Agile Development Guide (Atlassian)", type: "Guide", url: "https://www.atlassian.com/agile" },
      { name: "User Testing Platforms (UserTesting)", type: "Platform", url: "https://www.usertesting.com/" },
    ]
  },
  {
    title: "Marketing & Sales Resources",
    icon: <LinkIcon className="h-8 w-8 text-yellow-600" />,
    resources: [
      { name: "Content Marketing Strategy (HubSpot)", type: "Guide", url: "https://blog.hubspot.com/marketing/content-marketing-strategy-guide" },
      { name: "SEO Checklist for Startups (Ahrefs)", type: "Checklist", url: "https://ahrefs.com/blog/seo-checklist/" },
      { name: "CRM Software Comparison (G2)", type: "Comparison", url: "https://www.g2.com/categories/crm" },
    ]
  },
  // Add more categories as needed
];

const Resources = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Startup Resource Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Curated tools, guides, templates, and articles to help you build and grow your startup.
          </p>
        </div>

        <div className="space-y-12">
          {resourceCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold text-gray-800 ml-4">{category.title}</h2>
              </div>
              <ul className="space-y-3">
                {category.resources.map((resource, resIndex) => (
                  <li key={resIndex}>
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex justify-between items-center p-4 bg-gray-50 rounded hover:bg-gray-100 transition duration-200 group"
                    >
                      <span className="text-gray-700 group-hover:text-blue-600">{resource.name}</span>
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full group-hover:bg-blue-200">
                        {resource.type}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600">
            Looking for something specific? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> for personalized recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources; 
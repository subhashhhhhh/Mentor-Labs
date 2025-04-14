import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What kind of startups does Mentor Labs typically work with?",
    answer: "We primarily work with early-stage technology startups (pre-seed to seed) across various sectors, but we are open to innovative ideas from all industries. The key factor is a strong founding team and a potentially scalable business model."
  },
  {
    question: "What is the application process like for your programs?",
    answer: "The application process typically involves submitting an online form detailing your startup, team, and traction. Selected applicants will proceed to interviews with our program managers and mentors. Deadlines and specific requirements vary by program."
  },
  {
    question: "Do you take equity in the startups you mentor?",
    answer: "Our model varies depending on the program. Some programs, particularly the accelerator stages, may involve taking a small equity stake or using convertible notes in exchange for mentorship, resources, and potential funding. Our pre-seed programs often have different structures. Specific terms are discussed during the application process."
  },
  {
    question: "What kind of mentorship can I expect?",
    answer: "You can expect dedicated mentorship from experienced entrepreneurs and industry experts tailored to your startup's specific needs. This includes regular check-ins, strategic guidance on product development, marketing, fundraising, operations, and access to our broader network."
  },
  {
    question: "Are the programs remote or in-person?",
    answer: "We offer both hybrid and fully remote program options to accommodate founders from different locations. Specific formats will be detailed in the program descriptions."
  },
  {
    question: "What happens after completing a Mentor Labs program?",
    answer: "Graduates become part of the Mentor Labs alumni network, gaining continued access to resources, community events, and potential follow-on support. We aim to build long-term relationships with our portfolio companies."
  }
  // Add more FAQs as needed
];

// Define prop types for the AccordionItem component
interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-blue-600" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We've got answers. Find information about our programs, application process, and more.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600">
            Can't find the answer you're looking for? <a href="/contact" className="text-blue-600 hover:underline">Contact our team</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 
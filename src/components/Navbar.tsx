import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Lightbulb } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Lightbulb className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Mentor Labs</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/programs" className="text-gray-600 hover:text-blue-600">Programs</Link>
            <Link to="/startups" className="text-gray-600 hover:text-blue-600">Startups</Link>
            <Link to="/mentors" className="text-gray-600 hover:text-blue-600">Mentors</Link>
            <Link to="/events" className="text-gray-600 hover:text-blue-600">Events</Link>
            <Link to="/resources" className="text-gray-600 hover:text-blue-600">Resources</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/programs"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
              <Link
                to="/startups"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Startups
              </Link>
              <Link
                to="/mentors"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Mentors
              </Link>
              <Link
                to="/events"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/resources"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/faq"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
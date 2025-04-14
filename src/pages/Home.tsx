import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Rocket } from 'lucide-react';
import matter from 'gray-matter';

const mentors = [
  {
    name: "Dr. Prashant Singh Rana",
    role: "Technology Innovation",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    name: "Tathagat Kumar",
    role: "Business Strategy",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    name: "Dr. Saif Nalband",
    role: "Market Research",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
  }
];

interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
}

const Home = () => {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const [latestPosts, setLatestPosts] = useState<PostMetadata[]>([]);
  const [loadingTicker, setLoadingTicker] = useState(true);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      setLoadingTicker(true);
      try {
        const modules = import.meta.glob('/src/posts/*.md');
        const postPromises = Object.keys(modules).map(async (path) => {
          const slug = path.replace('/src/posts/', '').replace('.md', '');
          try {
            const response = await fetch(path);
            if (!response.ok) return null;
            const rawContent = await response.text();
            const { data } = matter(rawContent);
            if (!data.title || !data.date || !data.excerpt) return null;
            return { slug, ...(data as Partial<PostMetadata>) } as PostMetadata;
          } catch {
            return null;
          }
        });

        const fetchedPosts = (await Promise.all(postPromises))
            .filter(p => p !== null) as PostMetadata[];
        
        fetchedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setLatestPosts(fetchedPosts.slice(0, 3));
      } catch (err) {
        console.error("Error fetching latest posts for ticker:", err);
      } finally {
          setLoadingTicker(false);
      }
    };

    fetchLatestPosts();
  }, []);

  useEffect(() => {
    if (latestPosts.length === 0) return;
    const timer = setInterval(() => {
      setCurrentBlogIndex((prev) => (prev + 1) % latestPosts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [latestPosts]);

  return (
    <div>
      {/* Hero Section with Latest Blog Posts */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering Startups Through Expert Mentorship
              </h1>
              <p className="text-xl text-blue-200 mb-8">
                Connect with industry leaders and transform your startup journey with personalized guidance and support.
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 min-h-[200px] flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-4">Latest From The Blog</h2>
              {loadingTicker ? (
                 <p className="text-blue-200">Loading latest posts...</p>
              ) : latestPosts.length > 0 ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={latestPosts[currentBlogIndex].slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link to={`/blog/${latestPosts[currentBlogIndex].slug}`} className="hover:underline">
                      <h3 className="text-lg font-medium mb-1">{latestPosts[currentBlogIndex].title}</h3>
                    </Link>
                    <p className="text-blue-200 text-sm mb-2">{latestPosts[currentBlogIndex].excerpt}</p>
                    <p className="text-xs text-blue-300">{new Date(latestPosts[currentBlogIndex].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </motion.div>
                </AnimatePresence>
              ) : (
                 <p className="text-blue-200">No recent blog posts found.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Programs</h2>
            <p className="mt-4 text-xl text-gray-600">Tailored mentorship programs for every stage of your startup journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-blue-600" />,
                title: "Early Stage Mentorship",
                description: "Perfect for startups in the ideation phase looking to validate their concept."
              },
              {
                icon: <Rocket className="h-8 w-8 text-blue-600" />,
                title: "Growth Acceleration",
                description: "Designed for startups ready to scale their operations and expand market presence."
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Industry Connect",
                description: "Connect with industry leaders and potential investors through our network."
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Link
                  to="/programs"
                  className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Mentors</h2>
            <p className="mt-4 text-xl text-gray-600">Learn from the best in the industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                  <p className="text-blue-600">{mentor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Startups Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Startups</h2>
            <p className="mt-4 text-xl text-gray-600">Success stories from our mentorship program</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "TechVision AI",
                description: "AI-powered analytics platform revolutionizing business intelligence",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "EcoSmart Solutions",
                description: "Sustainable technology solutions for smart cities",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "HealthTech Innovations",
                description: "Revolutionary healthcare management platform",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((startup, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src={startup.image}
                  alt={startup.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{startup.name}</h3>
                  <p className="text-gray-600">{startup.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/startups"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              View All Startups
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Startup?</h2>
                <p className="text-xl text-blue-200 mb-8">
                  Get in touch with us to learn more about our mentorship programs and how we can help your startup succeed.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
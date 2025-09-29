import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, GraduationCap, Briefcase, Bot, Target, Star } from 'lucide-react';
import CollegeCard from '../components/CollegeCard';
import { mockColleges } from '../data/colleges';

export default function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    // Check for college-related searches
    if (query.includes('college') || query.includes('university') || query.includes('institute')) {
      return navigate('/colleges');
    }
    
    // Check for career-related searches
    if (query.includes('career') || query.includes('job') || query.includes('profession')) {
      return navigate('/career-explorer');
    }
    
    // Check for scholarship searches
    if (query.includes('scholarship') || query.includes('grant') || query.includes('financial aid')) {
      return navigate('/scholarships');
    }
    
    // For all other searches, navigate to AI advisor with the query
    navigate(`/ai-advisor?q=${encodeURIComponent(query)}`);
  };

  const featuredColleges = mockColleges.slice(0, 3);

  const quickActions = [
    {
      title: 'Find Colleges',
      description: 'Discover the best colleges for your career',
      icon: GraduationCap,
      path: '/colleges',
      color: 'bg-blue-500'
    },
    {
      title: 'Explorer Careers',
      description: 'Find your perfect career path',
      icon: Briefcase,
      path: '/career-explorer',
      color: 'bg-green-500'
    },
    {
      title: 'AI Advisor',
      description: 'Get personalized guidance from AI',
      icon: Bot,
      path: '/ai-advisor',
      color: 'bg-purple-500'
    },
    {
      title: 'Interest Quiz',
      description: 'Discover your career interests',
      icon: Target,
      path: '/quiz',
      color: 'bg-orange-500'
    },
    {
      title: 'Scholarships',
description: 'Find scholarships for your studies',
icon: Star,
path: '/scholarships',
      color: 'bg-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Discover Your Career Path with
              <span className="block text-yellow-300">AI + Counselors!</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
              Get personalized guidance for colleges, careers, and scholarships with our AI-powered platform
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative flex items-center shadow-lg rounded-xl overflow-hidden">
                <Search className="absolute left-4 text-gray-500 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for colleges, courses, careers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-12 pr-32 py-4 text-lg text-gray-800 border-0 focus:ring-0 focus:outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-0 top-0 h-full px-6 bg-blue-600 text-white font-medium text-lg"
                >
                  Search
                </button>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm text-center h-full"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${action.color} text-white mb-4`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-r from-indigo-600 to-pink-500 px-4 py-12 md:p-8 text-white text-center shadow-lg w-full">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 px-2">
              Not Sure Which Career Path to Choose?
            </h3>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-base md:text-lg px-2">
              Take our comprehensive interest quiz or talk to our AI advisor to get personalized career recommendations based on your interests and skills.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Link 
                to="/quiz" 
                className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Take Interest Quiz
              </Link>
              <Link 
                to="/ai-advisor" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Talk to AI Advisor
              </Link>
            </div>
          </div>
        </div>



      {/* Featured Colleges */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Featured Colleges
            </h2>
            <Link
              to="/colleges"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, Clock, BookOpen } from 'lucide-react';
import { careerFlowcharts } from '../data/careerFlowcharts';

// Enhanced career flowcharts with additional details
const enhancedFlowcharts = careerFlowcharts.map((flowchart, index) => ({
  ...flowchart,
  courses: [8, 12, 10, 15, 9, 7][index % 6] || 10, // Add mock course counts
  duration: ['6 months', '1 year', '2 years', '3 years', '4 years', '5+ years'][index % 6] || 'Varies',
  category: ['Technology', 'Healthcare', 'Business', 'Arts', 'Science', 'Engineering'][index % 6] || 'General'
}));

export default function CareerExplorerPage() {
  const [visibleFlowcharts, setVisibleFlowcharts] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredFlowcharts = selectedCategory
    ? enhancedFlowcharts.filter(f => f.category === selectedCategory)
    : enhancedFlowcharts;

  const displayedFlowcharts = filteredFlowcharts.slice(0, visibleFlowcharts);

  const careerStats = [
    { label: 'Career Paths', value: '250+', icon: TrendingUp, color: 'bg-blue-500' },
    { label: 'Industry Sectors', value: '50+', icon: Users, color: 'bg-green-500' },
    { label: 'Avg. Salary Range', value: '₹5-25 LPA', icon: DollarSign, color: 'bg-purple-500' },
    { label: 'Success Rate', value: '85%', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Career Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover various career paths and understand the journey from your current education to your dream job
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {careerStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-lg p-3 mr-4`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course to Career Flowcharts */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Course to Career Flowcharts
              </h2>
              <p className="text-gray-600 mt-2">Explore various career paths and their educational requirements</p>
            </div>
            <div className="text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-lg">
              Showing {Math.min(visibleFlowcharts, filteredFlowcharts.length)} of {filteredFlowcharts.length} flowcharts
              {selectedCategory && ` in ${selectedCategory}`}
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by Category:</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1.5 text-sm rounded-full ${
                  !selectedCategory
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                All Categories
              </button>
              {Array.from(new Set(enhancedFlowcharts.map(f => f.category))).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-sm rounded-full ${
                    selectedCategory === category
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Flowcharts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedFlowcharts.map((flowchart) => (
              <div 
                key={flowchart.id} 
                className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="h-40 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center p-4 relative">
                  <img
                    src={flowchart.image}
                    alt={flowchart.title}
                    className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 text-xs font-medium px-2.5 py-1 rounded-full text-gray-700 shadow-sm">
                    {flowchart.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {flowchart.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                    {flowchart.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">
                    {flowchart.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5" />
                      {flowchart.courses} courses
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {flowchart.duration}
                    </span>
                  </div>
                  <Link
                    to={`/career-explorer/${flowchart.id}`}
                    className="block w-full py-2.5 px-4 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    Explore Career Path
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {visibleFlowcharts < filteredFlowcharts.length && (
            <div className="text-center mt-10">
              <button 
                onClick={() => setVisibleFlowcharts(prev => prev + 6)}
                className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm inline-flex items-center gap-2"
              >
                Load More Flowcharts
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
          
          {filteredFlowcharts.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No flowcharts found</h3>
              <p className="text-gray-500 max-w-md mx-auto">We couldn't find any flowcharts matching your selected category.</p>
              <button 
                onClick={() => setSelectedCategory(null)}
                className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
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
        

        {/* Popular Career Paths */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Popular Career Paths
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Software Engineering',
                education: 'BTech/BCA → MTech/MCA',
                salary: '₹8-30 LPA',
                growth: 'High',
                skills: ['Programming', 'Problem Solving', 'System Design']
              },
              {
                title: 'Data Science',
                education: 'BTech/BSc → MS/PhD',
                salary: '₹10-40 LPA',
                growth: 'Very High',
                skills: ['Statistics', 'Machine Learning', 'Python']
              },
              {
                title: 'Digital Marketing',
                education: 'Any Graduate → Certification',
                salary: '₹5-20 LPA',
                growth: 'High',
                skills: ['SEO/SEM', 'Analytics', 'Content Strategy']
              },
              {
                title: 'Product Management',
                education: 'BTech/MBA',
                salary: '₹15-50 LPA',
                growth: 'Very High',
                skills: ['Strategy', 'Analytics', 'Leadership']
              },
              {
                title: 'UI/UX Design',
                education: 'Design Degree → Portfolio',
                salary: '₹6-25 LPA',
                growth: 'High',
                skills: ['Design Tools', 'User Research', 'Prototyping']
              },
              {
                title: 'Financial Analyst',
                education: 'B.Com/BBA → MBA/CFA',
                salary: '₹7-25 LPA',
                growth: 'Medium',
                skills: ['Financial Modeling', 'Excel', 'Analysis']
              }
            ].map((career, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{career.title}</h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Education Path:</span>
                    <span className="font-medium">{career.education}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salary Range:</span>
                    <span className="font-medium text-green-600">{career.salary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth Potential:</span>
                    <span className={`font-medium ${
                      career.growth === 'Very High' ? 'text-green-600' :
                      career.growth === 'High' ? 'text-blue-600' : 'text-orange-600'
                    }`}>
                      {career.growth}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <span className="text-sm text-gray-600">Key Skills:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {career.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
}
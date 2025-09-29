import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, Bookmark, Share2, Users, Award, Building } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockColleges } from '../data/colleges';
import { useApp } from '../context/AppContext';

export default function CollegeDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useApp();
  
  const college = mockColleges.find(c => c.id === id);
  const isSaved = state.savedColleges.some(c => c.id === id);

  if (!college) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">College Not Found</h1>
          <button
            onClick={() => navigate('/colleges')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Colleges
          </button>
        </div>
      </div>
    );
  }

  const cutoffData = college.cutoff?.map((score, index) => ({
    year: `Year ${index + 1}`,
    cutoff: score
  })) || [];

  const handleSave = () => {
    if (isSaved) {
      dispatch({ type: 'REMOVE_SAVED_COLLEGE', payload: college.id });
    } else {
      dispatch({ type: 'SAVE_COLLEGE', payload: college });
    }
  };

  const handleTalkToCounselor = () => {
    navigate('/counselors', { state: { fromCollege: college.id } });
  };

  const handleCheckScholarships = () => {
    navigate('/scholarships');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: college.name,
        text: `Check out ${college.name} - ${college.location}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleApplyNow = () => {
    if (college.website) {
      window.open(college.website, '_blank', 'noopener,noreferrer');
    } else {
      alert('Application link not available. Please contact the college directly.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/colleges')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Colleges</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* College Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img
            src={college.image}
            alt={college.name}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1 mb-4 lg:mb-0">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{college.name}</h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{college.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{college.rating}/5</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Building className="h-4 w-4" />
                    <span>{college.type}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-500">Annual Fees:</span>
                  <p className="text-2xl font-bold text-blue-600">{college.fees}</p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={handleSave}
                  className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors ${
                    isSaved
                      ? 'border-blue-600 text-blue-600 bg-blue-50'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                  <span>{isSaved ? 'Saved' : 'Save'}</span>
                </button>
                
                <button 
                  onClick={handleShare}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
                
                <button 
                  onClick={handleApplyNow}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">
                {college.about}
              </p>
            </div>

            {/* Cutoff Trends - Hidden on mobile */}
            <div className="hidden lg:block bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Cutoff Trends</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={cutoffData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="cutoff" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      dot={{ fill: '#3B82F6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Mobile Cutoff Summary */}
            <div className="lg:hidden bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Cutoff Information</h2>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-600 font-medium">Latest Cutoff</p>
                  <p className="text-lg font-bold text-blue-800">
                    {cutoffData[cutoffData.length - 1]?.cutoff || 'N/A'}
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600 font-medium">Trend</p>
                  <p className="text-lg font-bold text-green-800">
                    {cutoffData.length > 1 && cutoffData[cutoffData.length - 1]?.cutoff > cutoffData[cutoffData.length - 2]?.cutoff ? '↗️ Rising' : '↘️ Stable'}
                  </p>
                </div>
              </div>
            </div>

            {/* Courses Offered - Desktop */}
            <div className="hidden lg:block bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Courses Offered</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {college.courses?.map((course, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-800">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses Offered - Mobile */}
            <div className="lg:hidden bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Top Courses</h2>
              <div className="grid grid-cols-1 gap-2">
                {college.courses?.slice(0, 4).map((course, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                    <Award className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="font-medium text-gray-800 text-sm">{course}</span>
                  </div>
                ))}
                {college.courses?.length > 4 && (
                  <p className="text-sm text-gray-500 text-center mt-2">
                    +{college.courses.length - 4} more courses available
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 lg:space-y-6">
            {/* Placement Stats */}
            <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
              <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3 lg:mb-4">Placement Statistics</h3>
              <div className="space-y-3 lg:space-y-4">
                <div>
                  <span className="text-xs lg:text-sm text-gray-500">Average Package</span>
                  <p className="text-base lg:text-lg font-semibold text-green-600">{college.placements?.averagePackage}</p>
                </div>
                <div>
                  <span className="text-xs lg:text-sm text-gray-500">Highest Package</span>
                  <p className="text-base lg:text-lg font-semibold text-green-600">{college.placements?.highestPackage}</p>
                </div>
                <div>
                  <span className="text-xs lg:text-sm text-gray-500">Placement Rate</span>
                  <p className="text-base lg:text-lg font-semibold text-blue-600">{college.placements?.placementRate}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
              <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3 lg:mb-4">Need Help?</h3>
              <div className="space-y-2 lg:space-y-3">
                <button 
                  onClick={handleTalkToCounselor}
                  className="w-full flex items-center justify-center space-x-2 px-3 lg:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base"
                >
                  <Users className="h-4 w-4" />
                  <span>Talk to Counselor</span>
                </button>
                <button 
                  onClick={handleCheckScholarships}
                  className="w-full flex items-center justify-center space-x-2 px-3 lg:px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm lg:text-base"
                >
                  <Award className="h-4 w-4" />
                  <span>Check Scholarships</span>
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-700">Address:</p>
                  <p className="break-words">Campus Address, {college.location}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Phone:</p>
                  <p className="break-all">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Email:</p>
                  <p className="break-all">admissions@{college.name.toLowerCase().replace(/\s+/g, '')}.edu</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Website:</p>
                  <p className="break-all">www.{college.name.toLowerCase().replace(/\s+/g, '')}.edu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
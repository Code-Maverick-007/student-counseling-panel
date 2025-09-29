import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { Edit, BookOpen, Users, TrendingUp, Calendar, Award, DollarSign, User as UserIcon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import CollegeCard from '../components/CollegeCard';
import InterestRecommendations from '../components/InterestRecommendations';

export default function DashboardPage() {
  const { state } = useApp();
  const { user, isLoaded, isSignedIn } = useUser();

  // Calculate profile completion
  const calculateProfileCompletion = () => {
    if (!user) return 0;
    const metadata = { ...user.publicMetadata, ...user.privateMetadata };
    const requiredFields = ['name', 'email'];
    const optionalFields = ['phone', 'dateOfBirth', 'address', 'city', 'state', 'pincode', 
                           'class10Board', 'class10School', 'class10Year', 'class10Percentage',
                           'class12Board', 'class12School', 'class12Year', 'class12Percentage', 'class12Stream',
                           'currentEducation', 'collegeName', 'course', 'semester', 'cgpa'];
    
    const requiredCompleted = requiredFields.filter(field => {
      if (field === 'name') return user.fullName || user.firstName;
      if (field === 'email') return user.primaryEmailAddress?.emailAddress;
      return metadata[field];
    }).length;
    
    const optionalCompleted = optionalFields.filter(field => {
      const value = metadata[field];
      if (Array.isArray(value)) return value.length > 0;
      return value && value.toString().trim();
    }).length;
    
    const totalFields = requiredFields.length + optionalFields.length;
    const completedFields = requiredCompleted + optionalCompleted;
    
    return Math.round((completedFields / totalFields) * 100);
  };

  const profileCompletion = calculateProfileCompletion();

  const stats = [
    { label: 'Saved Colleges', value: state.savedColleges.length, icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Connected Counselors', value: state.connectedCounselors.length, icon: Users, color: 'bg-green-500' },
   

    { label: 'Saved Scholarships', value: state.savedScholarships.length, icon: DollarSign, color: 'bg-yellow-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.fullName || user?.firstName || 'Student'}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's your career guidance journey overview
          </p>
        </div>

        {/* Enhanced Profile Card */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Profile Photo */}
            <div className="relative">
              <img
                src={user?.imageUrl || 'https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Profile'}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <UserIcon className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-3">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {user?.fullName || user?.firstName || 'Complete Your Profile'}
                </h2>
                <p className="text-gray-600 text-lg">
                  {user?.primaryEmailAddress?.emailAddress || 'Add your email'}
                </p>
                <p className="text-gray-600">
                  {user?.primaryPhoneNumber?.phoneNumber || 'Add your phone number'}
                </p>
              </div>

              {/* Profile Completion */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">Profile Completion</span>
                  <span className="text-sm font-bold text-blue-600">{profileCompletion}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${profileCompletion}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  {profileCompletion < 50 ? 'Complete your profile to get better recommendations' : 
                   profileCompletion < 80 ? 'Almost there! Add more details' : 
                   'Excellent! Your profile is comprehensive'}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3">
              <Link 
                to="/edit-profile" 
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center space-x-2">
                  <Edit className="h-5 w-5" />
                  <span className="font-semibold">Edit Profile</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>
              
              {profileCompletion < 100 && (
                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-1">Complete for better matches</p>
                  <div className="flex items-center justify-center space-x-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-yellow-600">
                      {100 - profileCompletion}% remaining
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
                <div className={`${stat.color} rounded-lg p-3 mb-3`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
            </div>
          ))}
        </div>

        {/* Interest Recommendations */}
        <div className="mb-8">
          <InterestRecommendations />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Saved Colleges */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Saved Colleges</h3>
              <Link to="/colleges" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </Link>
            </div>
            
            {state.savedColleges.length > 0 ? (
              <div className="space-y-3">
                {state.savedColleges.slice(0, 3).map((college) => (
                  <div key={college.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <img
                      src={college.image}
                      alt={college.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{college.name}</h4>
                      <p className="text-gray-600 text-xs">{college.location}</p>
                    </div>
                    <Link
                      to={`/colleges/${college.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      View
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No saved colleges yet</p>
                <Link
                  to="/colleges"
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
                >
                  Browse Colleges
                </Link>
              </div>
            )}
          </div>

          {/* Saved Scholarships */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Saved Scholarships</h3>
              <Link to="/scholarships" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </Link>
            </div>
            {state.savedScholarships.length > 0 ? (
              <div className="space-y-3">
                {state.savedScholarships.slice(0, 3).map((scholarship) => (
                  <div key={scholarship.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{scholarship.title}</h4>
                      <p className="text-gray-600 text-xs">{scholarship.amount}</p>
                    </div>
                    <a
                      href={scholarship.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      Apply
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No saved scholarships yet</p>
                <Link
                  to="/scholarships"
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
                >
                  Browse Scholarships
                </Link>
              </div>
            )}
          </div>

          {/* Connected Counselors */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Connected Counselors</h3>
              <Link to="/counselors" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </Link>
            </div>
            
            {state.connectedCounselors.length > 0 ? (
              <div className="space-y-3">
                {state.connectedCounselors.slice(0, 3).map((counselor) => (
                  <div key={counselor.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <img
                      src={counselor.photo}
                      alt={counselor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{counselor.name}</h4>
                      <p className="text-gray-600 text-xs">{counselor.specialization}</p>
                    </div>
                    <button className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {counselor.availability}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No connected counselors yet</p>
                <Link
                  to="/counselors"
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
                >
                  Find Counselors
                </Link>
              </div>
            )}
          </div>
        </div>

        
        
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { useApp } from '../context/AppContext';
import { User, Mail, Phone, Camera, GraduationCap, Calendar, MapPin, BookOpen, Award, Target, AlertCircle, CheckCircle } from 'lucide-react';

// Add custom CSS for animations
const customStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out;
  }
  
  .animate-slideIn {
    animation: slideIn 0.4s ease-out;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .glass-effect {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.8);
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = customStyles;
  document.head.appendChild(styleSheet);
}

export default function EditProfilePage() {
  const { state, dispatch } = useApp();
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    photo: 'https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Profile',
    
    // Academic Information
    class10Board: '',
    class10School: '',
    class10Year: '',
    class10Percentage: '',
    class10Stream: '',
    
    class12Board: '',
    class12School: '',
    class12Year: '',
    class12Percentage: '',
    class12Stream: '',
    
    // Higher Education
    currentEducation: '',
    collegeName: '',
    course: '',
    semester: '',
    cgpa: '',
    
    // Career Preferences
    careerInterests: [],
    preferredLocation: '',
    targetExams: [],
    
    // Additional Information
    skills: [],
    achievements: '',
    extracurriculars: ''
  });

  // Load user data from Clerk when component mounts
  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      const clerkData = {
        name: user.fullName || user.firstName + ' ' + user.lastName || '',
        email: user.primaryEmailAddress?.emailAddress || '',
        phone: user.primaryPhoneNumber?.phoneNumber || '',
        photo: user.imageUrl || 'https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Profile',
        // Load additional data from user metadata
        ...user.publicMetadata,
        ...user.privateMetadata
      };
      
      setFormData(prev => ({
        ...prev,
        ...clerkData
      }));
    }
  }, [isLoaded, isSignedIn, user]);

  const [activeTab, setActiveTab] = useState('personal');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Calculate profile completion percentage
  const calculateProfileCompletion = () => {
    const requiredFields = ['name', 'email'];
    const optionalFields = ['phone', 'dateOfBirth', 'address', 'city', 'state', 'pincode', 
                           'class10Board', 'class10School', 'class10Year', 'class10Percentage',
                           'class12Board', 'class12School', 'class12Year', 'class12Percentage', 'class12Stream',
                           'currentEducation', 'collegeName', 'course', 'semester', 'cgpa'];
    
    const requiredCompleted = requiredFields.filter(field => formData[field]?.trim()).length;
    const optionalCompleted = optionalFields.filter(field => {
      if (Array.isArray(formData[field])) {
        return formData[field].length > 0;
      }
      return formData[field]?.trim();
    }).length;
    
    const totalFields = requiredFields.length + optionalFields.length;
    const completedFields = requiredCompleted + optionalCompleted;
    
    return Math.round((completedFields / totalFields) * 100);
  };

  const profileCompletion = calculateProfileCompletion();

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const validatePercentage = (percentage) => {
    const numValue = parseFloat(percentage);
    return !isNaN(numValue) && numValue >= 0 && numValue <= 100;
  };

  const validateForm = () => {
    const newErrors = {};

    // Personal Information Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }

    // Academic Validation
    if (formData.class10Percentage && !validatePercentage(formData.class10Percentage.replace('%', ''))) {
      newErrors.class10Percentage = 'Please enter a valid percentage (0-100)';
    }

    if (formData.class12Percentage && !validatePercentage(formData.class12Percentage.replace('%', ''))) {
      newErrors.class12Percentage = 'Please enter a valid percentage (0-100)';
    }

    if (formData.class10Year && (formData.class10Year < 2000 || formData.class10Year > new Date().getFullYear())) {
      newErrors.class10Year = 'Please enter a valid year';
    }

    if (formData.class12Year && (formData.class12Year < 2000 || formData.class12Year > new Date().getFullYear())) {
      newErrors.class12Year = 'Please enter a valid year';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleArrayChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value.split(',').map(item => item.trim()).filter(item => item)
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (isSignedIn && user) {
        // Prepare data for Clerk metadata
        const { name, email, photo, ...additionalData } = formData;
        
        // Update user's basic info
        await user.update({
          firstName: name.split(' ')[0] || '',
          lastName: name.split(' ').slice(1).join(' ') || '',
        });

        // Save additional profile data to user metadata
        await user.update({
          publicMetadata: {
            ...user.publicMetadata,
            profileCompleted: true,
            lastUpdated: new Date().toISOString(),
          },
          privateMetadata: {
            ...user.privateMetadata,
            ...additionalData
          }
        });
      }
      
      // Also update local state
      dispatch({ type: 'UPDATE_USER', payload: formData });
      setShowSuccess(true);
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'academic', label: 'Academic Details', icon: GraduationCap },
    { id: 'career', label: 'Career Preferences', icon: Target },
    { id: 'additional', label: 'Additional Info', icon: Award }
  ];

  // Helper component for input with validation
  const InputField = ({ label, name, type = 'text', icon: Icon, placeholder, error, ...props }) => (
    <div className="group">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
        {label}
      </label>
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm`}></div>
        <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm group-focus-within:shadow-lg transition-all duration-200">
          {Icon && (
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon className={`h-5 w-5 transition-colors ${error ? 'text-red-400' : 'text-gray-400 group-focus-within:text-blue-500'}`} />
            </div>
          )}
          <input
            type={type}
            name={name}
            id={name}
            className={`block w-full ${Icon ? 'pl-12' : 'pl-4'} pr-12 py-3 border-0 rounded-xl bg-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-400 transition-all ${
              error ? 'text-red-900 placeholder-red-300' : ''
            }`}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            {...props}
          />
          {error && (
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
      </div>
      {error && (
        <div className="mt-2 flex items-center space-x-2">
          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          <p className="text-sm text-red-600 font-medium">{error}</p>
        </div>
      )}
    </div>
  );

  // Show loading state while Clerk is loading
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  // Redirect to sign in if not authenticated
  if (!isSignedIn) {
    navigate('/sign-in');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Edit Profile
          </h1>
          <p className="text-gray-600 text-lg">Complete your profile to unlock personalized recommendations</p>
        </div>
        
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 shadow-lg animate-pulse">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-green-800">
                  Profile updated successfully! 🎉
                </p>
                <p className="text-xs text-green-600 mt-1">Redirecting to dashboard...</p>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Profile Photo Section */}
          <div className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 px-8 py-10">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute top-10 right-8 w-16 h-16 bg-white bg-opacity-5 rounded-full"></div>
              <div className="absolute bottom-4 left-1/3 w-20 h-20 bg-white bg-opacity-5 rounded-full"></div>
            </div>
            
            <div className="relative flex flex-col items-center">
              <div className="relative group">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-white to-gray-100 p-1 shadow-2xl">
                  <img
                    src={formData.photo}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <button 
                  type="button" 
                  className="absolute bottom-2 right-2 bg-white p-3 rounded-full text-blue-600 hover:bg-blue-50 shadow-xl transition-all duration-200 hover:scale-110 group-hover:shadow-2xl"
                >
                  <Camera className="h-5 w-5" />
                </button>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <h2 className="mt-6 text-2xl font-bold text-white drop-shadow-sm">
                {formData.name || 'Your Name'}
              </h2>
              <p className="text-blue-100 text-sm mt-1">Student Profile</p>
              
              <div className="mt-6 w-full max-w-sm">
                <div className="flex justify-between text-sm text-white mb-2">
                  <span className="font-medium">Profile Completion</span>
                  <span className="font-bold">{profileCompletion}%</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-3 shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-green-400 h-3 rounded-full transition-all duration-500 ease-out shadow-sm" 
                    style={{ width: `${profileCompletion}%` }}
                  ></div>
                </div>
                <p className="text-xs text-blue-100 mt-2 text-center">
                  {profileCompletion < 50 ? 'Keep going! 💪' : profileCompletion < 80 ? 'Almost there! 🚀' : 'Excellent! ⭐'}
                </p>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-gray-50 border-b border-gray-200">
            <nav className="flex space-x-1 px-2 sm:px-6 py-2 overflow-x-auto" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? 'bg-white text-blue-600 shadow-sm border-blue-200'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-white hover:shadow-sm'
                    } flex items-center space-x-2 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 border border-transparent`}
                  >
                    <div className={`p-1 rounded-md ${
                      activeTab === tab.id 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span>{tab.label}</span>
                    {activeTab === tab.id && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
            {activeTab === 'personal' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Full Name"
                    name="name"
                    icon={User}
                    placeholder="Enter your full name"
                    error={errors.name}
                    required
                  />

                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    icon={Mail}
                    placeholder="your.email@example.com"
                    error={errors.email}
                    required
                  />

                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    icon={Phone}
                    placeholder="+91 98765 43210"
                    error={errors.phone}
                  />

                  <InputField
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    icon={Calendar}
                    error={errors.dateOfBirth}
                  />
                </div>

                <div className="group">
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                    Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm group-focus-within:shadow-lg transition-all duration-200">
                      <div className="absolute top-3 left-0 pl-4 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                      </div>
                      <textarea
                        name="address"
                        id="address"
                        rows={3}
                        className="block w-full pl-12 pr-4 py-3 border-0 rounded-xl bg-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-400 resize-none"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your complete address"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="City"
                    name="city"
                    placeholder="City"
                    error={errors.city}
                  />

                  <InputField
                    label="State"
                    name="state"
                    placeholder="State"
                    error={errors.state}
                  />

                  <InputField
                    label="Pincode"
                    name="pincode"
                    placeholder="123456"
                    error={errors.pincode}
                    maxLength={6}
                  />
                </div>
              </div>
            )}

            {activeTab === 'academic' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Academic Details</h3>
                </div>
                
                {/* Class 10th Details */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 shadow-lg">
                  <h4 className="text-md font-medium text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                    Class 10th Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="class10Board" className="block text-sm font-medium text-gray-700">Board</label>
                      <select
                        name="class10Board"
                        id="class10Board"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        value={formData.class10Board}
                        onChange={handleChange}
                      >
                        <option value="">Select Board</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                        <option value="State Board">State Board</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="class10School" className="block text-sm font-medium text-gray-700">School Name</label>
                      <input
                        type="text"
                        name="class10School"
                        id="class10School"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={formData.class10School}
                        onChange={handleChange}
                        placeholder="School name"
                      />
                    </div>

                    <div>
                      <label htmlFor="class10Year" className="block text-sm font-medium text-gray-700">Passing Year</label>
                      <input
                        type="number"
                        name="class10Year"
                        id="class10Year"
                        min="2000"
                        max="2030"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={formData.class10Year}
                        onChange={handleChange}
                        placeholder="2020"
                      />
                    </div>

                    <div>
                      <label htmlFor="class10Percentage" className="block text-sm font-medium text-gray-700">Percentage/CGPA</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="text"
                          name="class10Percentage"
                          id="class10Percentage"
                          className={`focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                            errors.class10Percentage ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : ''
                          }`}
                          value={formData.class10Percentage}
                          onChange={handleChange}
                          placeholder="85% or 8.5 CGPA"
                        />
                        {errors.class10Percentage && (
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          </div>
                        )}
                      </div>
                      {errors.class10Percentage && <p className="mt-2 text-sm text-red-600">{errors.class10Percentage}</p>}
                    </div>
                  </div>
                </div>

                {/* Class 12th Details */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-md font-medium text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                    Class 12th Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="class12Board" className="block text-sm font-medium text-gray-700">Board</label>
                      <select
                        name="class12Board"
                        id="class12Board"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        value={formData.class12Board}
                        onChange={handleChange}
                      >
                        <option value="">Select Board</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                        <option value="State Board">State Board</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="class12School" className="block text-sm font-medium text-gray-700">School Name</label>
                      <input
                        type="text"
                        name="class12School"
                        id="class12School"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={formData.class12School}
                        onChange={handleChange}
                        placeholder="School name"
                      />
                    </div>

                    <div>
                      <label htmlFor="class12Stream" className="block text-sm font-medium text-gray-700">Stream</label>
                      <select
                        name="class12Stream"
                        id="class12Stream"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        value={formData.class12Stream}
                        onChange={handleChange}
                      >
                        <option value="">Select Stream</option>
                        <option value="Science (PCM)">Science (PCM)</option>
                        <option value="Science (PCB)">Science (PCB)</option>
                        <option value="Science (PCMB)">Science (PCMB)</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Arts/Humanities">Arts/Humanities</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="class12Year" className="block text-sm font-medium text-gray-700">Passing Year</label>
                      <input
                        type="number"
                        name="class12Year"
                        id="class12Year"
                        min="2000"
                        max="2030"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={formData.class12Year}
                        onChange={handleChange}
                        placeholder="2022"
                      />
                    </div>

                    <div>
                      <label htmlFor="class12Percentage" className="block text-sm font-medium text-gray-700">Percentage</label>
                      <input
                        type="text"
                        name="class12Percentage"
                        id="class12Percentage"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={formData.class12Percentage}
                        onChange={handleChange}
                        placeholder="85%"
                      />
                    </div>
                  </div>
                </div>

                {/* Higher Education */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-md font-medium text-gray-800 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                    Higher Education (Current/Completed)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="currentEducation" className="block text-sm font-medium text-gray-700">Education Level</label>
                      <select
                        name="currentEducation"
                        id="currentEducation"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        value={formData.currentEducation}
                        onChange={handleChange}
                      >
                        <option value="">Select Level</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                        <option value="Diploma">Diploma</option>
                        <option value="PhD">PhD</option>
                        <option value="Not Applicable">Not Applicable</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">College/University Name</label>
                      <input
                        type="text"
                        name="collegeName"
                        id="collegeName"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={formData.collegeName}
                        onChange={handleChange}
                        placeholder="College/University name"
                      />
                    </div>

                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course/Degree</label>
                      <input
                        type="text"
                        name="course"
                        id="course"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={formData.course}
                        onChange={handleChange}
                        placeholder="B.Tech, B.Sc, MBA, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="semester" className="block text-sm font-medium text-gray-700">Current Semester/Year</label>
                      <input
                        type="text"
                        name="semester"
                        id="semester"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={formData.semester}
                        onChange={handleChange}
                        placeholder="3rd Semester, 2nd Year, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="cgpa" className="block text-sm font-medium text-gray-700">CGPA/Percentage</label>
                      <input
                        type="text"
                        name="cgpa"
                        id="cgpa"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={formData.cgpa}
                        onChange={handleChange}
                        placeholder="8.5 CGPA or 85%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'career' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Career Preferences</h3>
                
                <div>
                  <label htmlFor="careerInterests" className="block text-sm font-medium text-gray-700">Career Interests</label>
                  <input
                    type="text"
                    name="careerInterests"
                    id="careerInterests"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={Array.isArray(formData.careerInterests) ? formData.careerInterests.join(', ') : ''}
                    onChange={(e) => handleArrayChange('careerInterests', e.target.value)}
                    placeholder="Software Engineering, Data Science, Medicine, etc. (comma separated)"
                  />
                  <p className="mt-1 text-sm text-gray-500">Enter your career interests separated by commas</p>
                </div>

                <div>
                  <label htmlFor="preferredLocation" className="block text-sm font-medium text-gray-700">Preferred Work Location</label>
                  <input
                    type="text"
                    name="preferredLocation"
                    id="preferredLocation"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    placeholder="Bangalore, Mumbai, Remote, etc."
                  />
                </div>

                <div>
                  <label htmlFor="targetExams" className="block text-sm font-medium text-gray-700">Target Exams</label>
                  <input
                    type="text"
                    name="targetExams"
                    id="targetExams"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={Array.isArray(formData.targetExams) ? formData.targetExams.join(', ') : ''}
                    onChange={(e) => handleArrayChange('targetExams', e.target.value)}
                    placeholder="JEE, NEET, CAT, GATE, etc. (comma separated)"
                  />
                  <p className="mt-1 text-sm text-gray-500">Enter exams you're preparing for or planning to take</p>
                </div>
              </div>
            )}

            {activeTab === 'additional' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h3>
                
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={Array.isArray(formData.skills) ? formData.skills.join(', ') : ''}
                    onChange={(e) => handleArrayChange('skills', e.target.value)}
                    placeholder="Python, Communication, Leadership, etc. (comma separated)"
                  />
                  <p className="mt-1 text-sm text-gray-500">List your technical and soft skills</p>
                </div>

                <div>
                  <label htmlFor="achievements" className="block text-sm font-medium text-gray-700">Achievements & Awards</label>
                  <textarea
                    name="achievements"
                    id="achievements"
                    rows={4}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={formData.achievements}
                    onChange={handleChange}
                    placeholder="List your academic achievements, awards, certifications, etc."
                  />
                </div>

                <div>
                  <label htmlFor="extracurriculars" className="block text-sm font-medium text-gray-700">Extracurricular Activities</label>
                  <textarea
                    name="extracurriculars"
                    id="extracurriculars"
                    rows={4}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={formData.extracurriculars}
                    onChange={handleChange}
                    placeholder="Sports, clubs, volunteer work, hobbies, etc."
                  />
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-float">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Complete your profile to get better recommendations
                  </p>
                  <p className="text-xs text-gray-600">
                    {profileCompletion}% completed • {profileCompletion < 50 ? 'Keep going!' : profileCompletion < 80 ? 'Almost there!' : 'Excellent!'}
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="group relative px-6 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-md"
                >
                  <span className="relative z-10">Cancel</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 border border-transparent rounded-xl shadow-lg text-sm font-semibold text-white hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-xl hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Saving...</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span>Save Changes</span>
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

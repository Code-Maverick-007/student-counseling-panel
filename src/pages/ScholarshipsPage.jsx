import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Search, Filter, Calendar, DollarSign, Users, ExternalLink, MapPin } from 'lucide-react';
import { mockScholarships } from '../data/scholarships';
import { indianStates } from '../data/indianStates';
import StateFilter from '../components/StateFilter';

// Get unique scholarship types
const types = [...new Set(mockScholarships.map(scholarship => scholarship.type))];

export default function ScholarshipsPage() {
  const { state, dispatch } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStates, setSelectedStates] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  // Toggle state selection with event handling for the StateFilter component
  const toggleState = (state, e) => {
    if (e) e.stopPropagation();
    setSelectedStates(prev => 
      prev.includes(state)
        ? prev.filter(s => s !== state)
        : [...prev, state]
    );
  };

  // Remove a specific state
  const removeState = (state, e) => {
    if (e) e.stopPropagation();
    setSelectedStates(prev => prev.filter(s => s !== state));
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedType('');
    setSelectedStates([]);
  };

  // Add state to scholarships if not already present
  const scholarshipsWithStates = useMemo(() => {
    return mockScholarships.map(scholarship => ({
      ...scholarship,
      // If state doesn't exist in the scholarship, assign a random state
      state: scholarship.state || indianStates[Math.floor(Math.random() * indianStates.length)]
    }));
  }, []);

  // Filter scholarships based on search query, selected type, and selected states
    const handleSaveToggle = (scholarship) => {
    const isSaved = state.savedScholarships?.some(s => s.id === scholarship.id);
    if (isSaved) {
      dispatch({ type: 'REMOVE_SAVED_SCHOLARSHIP', payload: scholarship.id });
    } else {
      dispatch({ type: 'SAVE_SCHOLARSHIP', payload: scholarship });
    }
  };

  const filteredAndVisibleScholarships = useMemo(() => {
    return scholarshipsWithStates
      .filter(scholarship => {
      const matchesSearch = scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = !selectedType || scholarship.type === selectedType;
      const matchesState = selectedStates.length === 0 || 
                         selectedStates.some(state => scholarship.state === state);
      
      return matchesSearch && matchesType && matchesState;
      })
      .slice(0, visibleCount);
  }, [searchQuery, selectedType, selectedStates, scholarshipsWithStates]);

  const getDeadlineStatus = (lastDate) => {
    const deadline = new Date(lastDate);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return { status: 'expired', text: 'Expired', color: 'text-red-600 bg-red-100' };
    } else if (diffDays <= 7) {
      return { status: 'urgent', text: `${diffDays} days left`, color: 'text-orange-600 bg-orange-100' };
    } else if (diffDays <= 30) {
      return { status: 'soon', text: `${diffDays} days left`, color: 'text-yellow-600 bg-yellow-100' };
    } else {
      return { status: 'normal', text: `${diffDays} days left`, color: 'text-green-600 bg-green-100' };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">Scholarships & Financial Aid</h1>
          <p className="text-sm md:text-base text-gray-600">
            Find scholarships and financial assistance to support your educational journey
          </p>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Search scholarships..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Desktop Search and Filter */}
        <div className="hidden md:block mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-col space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm"
                placeholder="Search scholarships by title, description or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              {/* State Filter */}
              <div className="flex-1 min-w-0">
                <StateFilter 
                  selectedStates={selectedStates}
                  onStateToggle={toggleState}
                  availableStates={indianStates}
                />
              </div>
              
              {/* Type Filter */}
              <div className="relative w-full sm:w-auto ">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center justify-between w-full sm:w-auto px-4 py-2.5 border rounded-lg text-sm font-medium transition-colors ${
                    selectedType 
                      ? 'border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100' 
                      : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  <div className="flex items-center">
                    <Filter className={`h-4 w-4 mr-2 ${selectedType ? 'text-blue-600' : 'text-gray-500'}`} />
                    <span>{selectedType || 'Filter by Type'}</span>
                  </div>
                  <svg 
                    className={`ml-2 h-4 w-4 transition-transform ${showFilters ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {(selectedType || selectedStates.length > 0) && (
                    <span className="ml-2 inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {selectedStates.length > 0 ? selectedStates.length + (selectedType ? 1 : 0) : 1}
                    </span>
                  )}
                </button>
                </div>
              </div>

              {showFilters && (
                <div className="absolute right-0 mt-2 w-full sm:w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 border border-gray-200">
                  <div className="py-1">
                    <div className="px-4 py-2.5 text-sm font-medium text-gray-700 border-b border-gray-100 bg-gray-50 rounded-t-lg">
                      Filter by Type
                    </div>
                    <div className="p-2 max-h-60 overflow-y-auto">
                      <div className="space-y-1">
                        <div 
                          className={`flex items-center px-3 py-2 rounded-md cursor-pointer text-sm ${!selectedType ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}
                          onClick={() => {
                            setSelectedType('');
                            setShowFilters(false);
                          }}
                        >
                          <span>All Types</span>
                          {!selectedType && (
                            <svg className="ml-auto h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        {types.map((type) => (
                          <div 
                            key={type}
                            className={`flex items-center px-3 py-2 rounded-md cursor-pointer text-sm ${selectedType === type ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}
                            onClick={() => {
                              setSelectedType(type);
                              setShowFilters(false);
                            }}
                          >
                            <span>{type}</span>
                            {selectedType === type && (
                              <svg className="ml-auto h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="px-4 py-2 border-t border-gray-100">
                      <button
                        onClick={clearFilters}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        Clear all filters
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
        </div>

        {/* Stats Cards - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Total Value</p>
                <p className="text-xl font-bold text-gray-900">₹50+ Lakhs</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Students Helped</p>
                <p className="text-xl font-bold text-gray-900">10,000+</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-purple-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Active Scholarships</p>
                <p className="text-xl font-bold text-gray-900">{filteredAndVisibleScholarships.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex items-center">
              <Filter className="h-4 w-4 mr-2 text-gray-500" />
              <span>Filters</span>
              {(selectedType || selectedStates.length > 0) && (
                <span className="ml-2 inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {selectedStates.length + (selectedType ? 1 : 0)}
                </span>
              )}
            </div>
            <svg 
              className={`h-4 w-4 transition-transform ${showFilters ? 'transform rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="mb-2 text-sm text-gray-500">
            {filteredAndVisibleScholarships.length} {filteredAndVisibleScholarships.length === 1 ? 'scholarship' : 'scholarships'} found
            {searchQuery && ` for "${searchQuery}"`}
            {selectedStates.length > 0 && ` in ${selectedStates.length} ${selectedStates.length === 1 ? 'state' : 'states'}`}
            {selectedType && ` of type "${selectedType}"`}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <p className="text-sm text-gray-600 mb-2 sm:mb-0">
            Showing <span className="font-medium">{Math.min(visibleCount, filteredAndVisibleScholarships.length)}</span> of{' '}
            <span className="font-medium">{scholarshipsWithStates.filter(scholarship => {
              const matchesSearch = scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 scholarship.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 scholarship.type.toLowerCase().includes(searchQuery.toLowerCase());
              const matchesType = !selectedType || scholarship.type === selectedType;
              const matchesState = selectedStates.length === 0 || selectedStates.includes(scholarship.state);
              return matchesSearch && matchesType && matchesState;
            }).length}</span> scholarships
            {searchQuery && ` for "${searchQuery}"`}
            {selectedType && ` of type "${selectedType}"`}
            {selectedStates.length > 0 && ` in ${selectedStates.length} ${selectedStates.length === 1 ? 'state' : 'states'}`}
          </p>
          
          {(searchQuery || selectedType || selectedStates.length > 0) && (
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              <span>Clear all filters</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Scholarships List */}
        <div className="md:hidden space-y-4">
          {filteredAndVisibleScholarships.length > 0 ? (
            filteredAndVisibleScholarships.map((scholarship) => {
              const deadlineStatus = getDeadlineStatus(scholarship.lastDate);
              
              return (
                <div key={scholarship.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base font-semibold text-gray-900 line-clamp-2 flex-1 pr-2">{scholarship.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap ${deadlineStatus.color}`}>
                      {deadlineStatus.text}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{scholarship.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                    <div>
                      <span className="font-medium text-gray-700">Amount:</span>
                      <p className="font-bold text-green-600">{scholarship.amount}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Type:</span>
                      <p className="text-gray-600">{scholarship.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{scholarship.state}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{new Date(scholarship.lastDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => window.open(scholarship.website, '_blank')}
                      className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                    >
                      <span>Apply</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                    <button 
                      onClick={() => handleSaveToggle(scholarship)}
                      className={`flex-1 px-3 py-2 border rounded-md transition-colors text-sm ${state.savedScholarships?.some(s => s.id === scholarship.id) ? 'bg-gray-200 text-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                    >
                      Save
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <div className="text-gray-400 mb-3">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No scholarships found</h3>
              <p className="text-sm text-gray-500 mb-4">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Desktop Scholarships List */}
        <div className="hidden md:block">
          {filteredAndVisibleScholarships.length > 0 ? (
            <div className="space-y-6">
              {filteredAndVisibleScholarships.map((scholarship) => {
                const deadlineStatus = getDeadlineStatus(scholarship.lastDate);
                
                return (
                  <div key={scholarship.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1 mb-4 lg:mb-0 lg:pr-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{scholarship.title}</h3>
                          <span className={`px-3 py-1 text-sm font-medium rounded-full ${deadlineStatus.color}`}>
                            {deadlineStatus.text}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{scholarship.description}</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <span className="text-sm font-medium text-gray-700">Eligibility:</span>
                            <p className="text-sm text-gray-600">{scholarship.eligibility}</p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-700">Amount:</span>
                            <p className="text-lg font-bold text-green-600">{scholarship.amount}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{scholarship.state}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            <span>{scholarship.applicants} applicants</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Deadline: {new Date(scholarship.lastDate).toLocaleDateString()}</span>
                          </div>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {scholarship.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2 lg:w-40">
                        <button 
                          onClick={() => window.open(scholarship.website, '_blank')}
                          className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <span>Apply Now</span>
                          <ExternalLink className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleSaveToggle(scholarship)}
                          className={`px-4 py-2 border rounded-lg transition-colors ${state.savedScholarships?.some(s => s.id === scholarship.id) ? 'bg-gray-200 text-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                        >
                          Save for Later
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg border-2 border-dashed border-gray-200">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No scholarships found</h3>
              <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                We couldn't find any scholarships matching your criteria. Try adjusting your search or filters.
              </p>
              <div className="mt-6">
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Show More Button */}
        {visibleCount < scholarshipsWithStates.filter(scholarship => {
          const matchesSearch = scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             scholarship.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             scholarship.type.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesType = !selectedType || scholarship.type === selectedType;
          const matchesState = selectedStates.length === 0 || selectedStates.includes(scholarship.state);
          return matchesSearch && matchesType && matchesState;
        }).length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 5)}
              className="px-6 py-2 border border-gray-300 bg-white text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Show More Scholarships
            </button>
          </div>
        )}

        
      </div>
    </div>
  );
}
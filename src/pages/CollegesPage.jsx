import React, { useState, useMemo } from 'react';
import { Search, Filter, X, MapPin } from 'lucide-react';
import CollegeCard from '../components/CollegeCard';
import CourseFilter from '../components/CourseFilter';
import StateFilter from '../components/StateFilter';
import ExamFilter from '../components/ExamFilter';
import EducationDetails from '../components/EducationDetails';
import { mockColleges } from '../data/colleges';
import { getAllCourses } from '../utils/collegeUtils';
import { indianStates } from '../data/indianStates';
import { allExams } from '../data/examData';
const colleges = mockColleges;

export default function CollegesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedExams, setSelectedExams] = useState([]);
  const [stateInput, setStateInput] = useState('');
  const [visibleColleges, setVisibleColleges] = useState(12);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const [tenthMarks, setTenthMarks] = useState('');
  const [twelfthMarks, setTwelfthMarks] = useState('');
  const [stream, setStream] = useState('');
  
  const availableCourses = useMemo(() => getAllCourses(colleges), [colleges]);
  // Use all Indian states instead of just those from colleges data
  const availableStates = useMemo(() => 
    [...new Set([...indianStates, ...colleges.map(c => c.state)])].sort(),
    [colleges]
  );

  const filteredColleges = useMemo(() => {
    const query = searchQuery?.toLowerCase().trim() || '';
    
    return colleges.filter(college => {
      if (!college) return false;
      
      // Normalize college data
      const collegeName = String(college.name || '').toLowerCase().trim();
      const collegeLocation = String(college.location || '').toLowerCase().trim();
      const collegeState = String(college.state || '').toLowerCase().trim();
      const collegeCourses = Array.isArray(college.courses) ? college.courses : [];
      const cutoffScores = Array.isArray(college.cutoff) ? college.cutoff : [0, 0, 0];
      
      // 1. Search filter (name or location)
      const matchesSearch = !query || 
        collegeName.includes(query) || 
        collegeLocation.includes(query);
      
      // 2. Course filter (any of selected courses should match)
      const matchesCourses = selectedCourses.length === 0 ||
        selectedCourses.some(selectedCourse => 
          collegeCourses.some(collegeCourse => 
            collegeCourse.toLowerCase().includes(selectedCourse.toLowerCase())
          )
        );
      
      // 3. State filter (exact match for state, checks both state and location)
      const matchesState = selectedStates.length === 0 || 
        selectedStates.some(selectedState => {
          const normalizedSelectedState = selectedState.toLowerCase().trim();
          return collegeState === normalizedSelectedState || collegeLocation === normalizedSelectedState;
        });
      
      // 4. Exam eligibility filter
      const matchesExams = selectedExams.length === 0 ||
        selectedExams.every(examId => {
          const eligibility = college.examEligibility || {};
          return eligibility[examId] === true;
        });
      
      // 5. Education marks filter (10th and 12th marks)
      const tenthMarksNum = tenthMarks ? Number(tenthMarks) : 0;
      const twelfthMarksNum = twelfthMarks ? Number(twelfthMarks) : 0;
      
      // Check if marks meet any cutoff (assuming cutoff is an array of [min1, min2, min3])
      const meetsCutoff = (marks) => {
        if (!marks || marks <= 0) return true; // No cutoff specified
        return cutoffScores.some(cutoff => marks >= cutoff);
      };
      
      const matchesEducation = 
        meetsCutoff(tenthMarksNum) && 
        meetsCutoff(twelfthMarksNum);
      
      // 6. Stream filter (if stream is selected)
      const matchesStream = !stream || 
        stream === 'any' || 
        (college.courses || []).some(course => {
          // Simple stream detection from course names
          const courseLower = course.toLowerCase();
          if (stream === 'engineering') {
            return courseLower.includes('engineering') || 
                   courseLower.includes('technology') ||
                   courseLower.includes('computer') ||
                   courseLower.includes('mechanical') ||
                   courseLower.includes('electrical') ||
                   courseLower.includes('civil');
          } else if (stream === 'medical') {
            return courseLower.includes('medical') || 
                   courseLower.includes('medicine') ||
                   courseLower.includes('mbbs') ||
                   courseLower.includes('bds');
          } else if (stream === 'arts') {
            return courseLower.includes('arts') || 
                   courseLower.includes('humanities') ||
                   courseLower.includes('english') ||
                   courseLower.includes('history');
          } else if (stream === 'commerce') {
            return courseLower.includes('commerce') || 
                   courseLower.includes('business') ||
                   courseLower.includes('accounting') ||
                   courseLower.includes('finance');
          }
          return true;
        });
      
      // All conditions must be true for a college to be included
      return (
        matchesSearch && 
        matchesCourses && 
        matchesState && 
        matchesExams && 
        matchesEducation &&
        matchesStream
      );
    });
  }, [searchQuery, selectedCourses, selectedStates, selectedExams, tenthMarks, twelfthMarks, stream, colleges]);

  const handleCourseToggle = (course) => {
    setSelectedCourses(prev => 
      prev.includes(course) ? prev.filter(c => c !== course) : [...prev, course]
    );
  };

  const handleStateToggle = (state) => {
    setSelectedStates(prev => 
      prev.includes(state) ? prev.filter(s => s !== state) : [...prev, state]
    );
  };

  const handleExamToggle = (exam) => {
    setSelectedExams(prev => 
      prev.includes(exam) ? prev.filter(e => e !== exam) : [...prev, exam]
    );
  };

  const addStateFromInput = (e) => {
    e.preventDefault();
    if (stateInput.trim() && !selectedStates.includes(stateInput.trim())) {
      setSelectedStates(prev => [...prev, stateInput.trim()]);
      setStateInput('');
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCourses([]);
    setSelectedStates([]);
    setSelectedExams([]);
    setTenthMarks('');
    setTwelfthMarks('');
    setStream('');
    setStateInput('');
  };

  const activeFilterCount = [
    searchQuery ? 1 : 0,
    selectedCourses.length,
    selectedStates.length,
    selectedExams.length,
    tenthMarks !== '' ? 1 : 0,
    twelfthMarks !== '' ? 1 : 0,
    stream ? 1 : 0
  ].reduce((a, b) => a + b, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Mobile Header with Search and Filter */}
      <div className="md:hidden mb-4">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-xl font-bold text-gray-800">Colleges</h1>
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm"
          >
            {showMobileFilters ? (
              <>
                <X size={16} />
                <span>Close</span>
              </>
            ) : (
              <>
                <Filter size={16} />
                <span>Filter</span>
                {activeFilterCount > 0 && (
                  <span className="ml-1 bg-white text-blue-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                    {activeFilterCount}
                  </span>
                )}
              </>
            )}
          </button>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search colleges..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className={`${showMobileFilters ? 'block' : 'hidden'} md:block w-full md:w-1/4`}>
          <div className="bg-white p-4 rounded-lg shadow-sm md:sticky md:top-4 space-y-5">
            <div className="flex justify-between items-center">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Filters</h3>
              <button 
                onClick={clearAllFilters}
                className="text-xs md:text-sm text-blue-600 hover:text-blue-800 disabled:opacity-50 px-2 py-1 rounded-md hover:bg-blue-50 transition-colors"
                disabled={activeFilterCount === 0}
              >
                Clear all
              </button>
            </div>

            {/* Active Filters Summary - Mobile Only */}
            {activeFilterCount > 0 && (
              <div className="md:hidden bg-blue-50 p-3 rounded-lg">
                <p className="text-xs text-blue-700 font-medium mb-2">Active Filters ({activeFilterCount})</p>
                <div className="flex flex-wrap gap-1">
                  {searchQuery && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                      Search
                    </span>
                  )}
                  {selectedStates.length > 0 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      States ({selectedStates.length})
                    </span>
                  )}
                  {selectedExams.length > 0 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
                      Exams ({selectedExams.length})
                    </span>
                  )}
                  {selectedCourses.length > 0 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                      Courses ({selectedCourses.length})
                    </span>
                  )}
                </div>
              </div>
            )}

            <StateFilter
              selectedStates={selectedStates}
              onStateToggle={(state) => {
                setSelectedStates(prev => 
                  prev.includes(state)
                    ? prev.filter(s => s !== state)
                    : [...prev, state]
                );
              }}
              availableStates={availableStates}
            />

            <ExamFilter 
              selectedExams={selectedExams}
              onExamToggle={handleExamToggle}
            />

            <EducationDetails
              tenthMarks={tenthMarks}
              twelfthMarks={twelfthMarks}
              stream={stream}
              onTenthMarksChange={setTenthMarks}
              onTwelfthMarksChange={setTwelfthMarks}
              onStreamChange={setStream}
            />

            <CourseFilter 
              selectedCourses={selectedCourses}
              onCourseToggle={handleCourseToggle}
              availableCourses={availableCourses}
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="hidden md:flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Colleges</h1>
              <p className="text-sm text-gray-600 mt-1">{filteredColleges.length} colleges found</p>
            </div>
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by college name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Desktop Active Filters */}
          {activeFilterCount > 0 && (
            <div className="hidden md:block mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-gray-700">Active Filters ({activeFilterCount})</h4>
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear all
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-white border border-gray-200 text-gray-800 shadow-sm">
                      Search: "{searchQuery.length > 20 ? searchQuery.substring(0, 20) + '...' : searchQuery}"
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="ml-2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  
                  {selectedStates.map(state => (
                    <span 
                      key={state} 
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200"
                    >
                      📍 {state}
                      <button 
                        onClick={() => handleStateToggle(state)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  
                  {selectedExams.map(exam => (
                    <span 
                      key={exam}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-green-100 text-green-800 border border-green-200"
                    >
                      📝 {allExams.find(e => e.id === exam)?.name || exam}
                      <button 
                        onClick={() => handleExamToggle(exam)}
                        className="ml-2 text-green-600 hover:text-green-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  
                  {selectedCourses.map(course => (
                    <span 
                      key={course}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200"
                    >
                      🎓 {course}
                      <button 
                        onClick={() => handleCourseToggle(course)}
                        className="ml-2 text-purple-600 hover:text-purple-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  
                  {tenthMarks !== '' && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-orange-100 text-orange-800 border border-orange-200">
                      📊 10th: {tenthMarks}%
                      <button 
                        onClick={() => setTenthMarks('')}
                        className="ml-2 text-orange-600 hover:text-orange-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  
                  {twelfthMarks !== '' && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-orange-100 text-orange-800 border border-orange-200">
                      📊 12th: {twelfthMarks}%
                      <button 
                        onClick={() => setTwelfthMarks('')}
                        className="ml-2 text-orange-600 hover:text-orange-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  
                  {stream && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                      🎯 {stream}
                      <button 
                        onClick={() => setStream('')}
                        className="ml-2 text-yellow-600 hover:text-yellow-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {filteredColleges.length > 0 ? (
            <>
              {/* Mobile Layout - Single Column */}
              <div className="md:hidden space-y-4">
                {filteredColleges.slice(0, visibleColleges).map((college) => (
                  <div key={college.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="flex gap-3">
                      <img 
                        src={college.image} 
                        alt={college.name}
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1">
                          {college.name}
                        </h3>
                        <div className="flex items-center text-xs text-gray-600 mb-2">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span className="truncate">{college.location}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-blue-600 font-medium">{college.fees}</span>
                          <div className="flex items-center">
                            <span className="text-yellow-500">★</span>
                            <span className="ml-1 text-gray-600">{college.rating?.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(college.website || '#', '_blank');
                        }}
                        className="flex-1 px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700"
                      >
                        Apply
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Navigate to college details
                          window.location.href = `/colleges/${college.id}`;
                        }}
                        className="flex-1 px-3 py-1.5 border border-gray-300 text-gray-700 text-xs rounded-md hover:bg-gray-50"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Layout - Grid */}
              <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredColleges.slice(0, visibleColleges).map((college) => (
                  <CollegeCard key={college.id} college={college} />
                ))}
              </div>
              {visibleColleges < filteredColleges.length && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setVisibleColleges(prev => Math.min(prev + 12, filteredColleges.length))}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Load More Colleges ({filteredColleges.length - visibleColleges} more)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500 mb-4">No colleges found matching your filters.</p>
              <button
                onClick={clearAllFilters}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
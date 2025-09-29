import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, X, Filter as FilterIcon } from 'lucide-react';
import { courseCategories } from '../data/courseCategories';

// Custom hook for media queries
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

const CourseFilter = ({ selectedCourses, onCourseToggle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [expandedSubcategories, setExpandedSubcategories] = useState(new Set());
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const filterRef = useRef(null);

  // Close mobile filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsMobileFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const toggleSubcategory = (category, subcategory) => {
    const key = `${category}-${subcategory}`;
    setExpandedSubcategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return courseCategories;
    
    const searchLower = searchTerm.toLowerCase();
    return courseCategories
      .map(category => {
        const filteredSubcategories = category.subcategories.map(subcat => ({
          ...subcat,
          courses: subcat.courses.filter(course => 
            course.toLowerCase().includes(searchLower) ||
            subcat.name.toLowerCase().includes(searchLower) ||
            category.category.toLowerCase().includes(searchLower)
          )
        })).filter(subcat => subcat.courses.length > 0);
        
        return filteredSubcategories.length > 0 ? {
          ...category,
          subcategories: filteredSubcategories
        } : null;
      })
      .filter(Boolean);
  }, [searchTerm]);

  const toggleCourse = (course) => {
    onCourseToggle(course);
  };

  const clearAll = () => {
    selectedCourses.forEach(course => onCourseToggle(course));
  };

  // Auto-expand categories/subcategories when searching
  useEffect(() => {
    if (searchTerm) {
      const newExpanded = new Set();
      const newSubExpanded = new Set();
      
      courseCategories.forEach(category => {
        newExpanded.add(category.category);
        category.subcategories.forEach(sub => {
          newSubExpanded.add(`${category.category}-${sub.name}`);
        });
      });
      
      setExpandedCategories(newExpanded);
      setExpandedSubcategories(newSubExpanded);
    }
  }, [searchTerm]);

  // Toggle all categories
  const toggleAllCategories = (expand) => {
    if (expand) {
      const allCategories = new Set(courseCategories.map(cat => cat.category));
      setExpandedCategories(allCategories);
      
      const allSubcategories = new Set();
      courseCategories.forEach(cat => {
        cat.subcategories.forEach(sub => {
          allSubcategories.add(`${cat.category}-${sub.name}`);
        });
      });
      setExpandedSubcategories(allSubcategories);
    } else {
      setExpandedCategories(new Set());
      setExpandedSubcategories(new Set());
    }
  };

  const selectedCount = selectedCourses.length;
  const hasFilters = selectedCount > 0;

  const renderFilterContent = () => (
    <>
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-1 custom-scrollbar">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => {
            const categorySelectedCount = category.subcategories.reduce(
              (count, sub) => count + sub.courses.filter(c => selectedCourses.includes(c)).length, 
              0
            );
            
            return (
              <div key={category.category} className="border border-gray-100 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleCategory(category.category)}
                >
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900">{category.category}</span>
                    {categorySelectedCount > 0 && (
                      <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {categorySelectedCount}
                      </span>
                    )}
                  </div>
                  {expandedCategories.has(category.category) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {(expandedCategories.has(category.category) || searchTerm) && (
                  <div className="p-2 space-y-2">
                    {category.subcategories.map((subcategory) => {
                      const subcategorySelectedCount = subcategory.courses.filter(
                        c => selectedCourses.includes(c)
                      ).length;
                      
                      return (
                        <div key={`${category.category}-${subcategory.name}`} className="bg-white rounded-lg overflow-hidden">
                          <button
                            className="w-full flex justify-between items-center p-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSubcategory(category.category, subcategory.name);
                            }}
                          >
                            <div className="flex items-center">
                              <span>{subcategory.name}</span>
                              {subcategorySelectedCount > 0 && (
                                <span className="ml-2 px-1.5 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">
                                  {subcategorySelectedCount}
                                </span>
                              )}
                            </div>
                            {expandedSubcategories.has(`${category.category}-${subcategory.name}`) || searchTerm ? (
                              <ChevronUp className="h-4 w-4 text-gray-400" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                          
                          {(expandedSubcategories.has(`${category.category}-${subcategory.name}`) || searchTerm) && (
                            <div className="ml-4 space-y-1 py-1">
                              {subcategory.courses.map((course) => (
                                <div 
                                  key={course} 
                                  className={`flex items-center p-1.5 rounded-md hover:bg-gray-50 ${
                                    selectedCourses.includes(course) ? 'bg-blue-50' : ''
                                  }`}
                                >
                                  <input
                                    id={`course-${course}`}
                                    type="checkbox"
                                    checked={selectedCourses.includes(course)}
                                    onChange={() => toggleCourse(course)}
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                  />
                                  <label 
                                    htmlFor={`course-${course}`} 
                                    className="ml-2 text-sm text-gray-700 cursor-pointer flex-1 truncate"
                                    title={course}
                                  >
                                    {course}
                                  </label>
                                  {selectedCourses.includes(course) && (
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleCourse(course);
                                      }}
                                      className="text-gray-400 hover:text-red-500 p-1"
                                    >
                                      <X className="h-3.5 w-3.5" />
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-4 text-center bg-gray-50 rounded-lg">
            <Search className="mx-auto h-8 w-8 text-gray-400" />
            <h4 className="mt-2 text-sm font-medium text-gray-900">No courses found</h4>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      
      {selectedCourses.length > 0 && (
        <div className={`mt-4 pt-3 ${!isMobile ? 'border-t border-gray-200' : ''}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Selected Courses</span>
            <button
              onClick={clearAll}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear all
            </button>
          </div>
          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-1">
            {selectedCourses.map(course => (
              <span 
                key={course} 
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-blue-50 text-blue-700 border border-blue-100"
              >
                <span className="truncate max-w-[200px]">{course}</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCourse(course);
                  }}
                  className="ml-2 inline-flex items-center justify-center h-5 w-5 rounded-full text-blue-400 hover:bg-blue-100 hover:text-blue-600"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Mobile action buttons */}
      {isMobile && isMobileFilterOpen && (
        <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 -mx-4 -mb-4">
          <button
            onClick={() => setIsMobileFilterOpen(false)}
            className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Show {selectedCount > 0 ? `${selectedCount} selected` : 'all'} courses
          </button>
        </div>
      )}
    </>
  );

  // Mobile filter toggle button
  if (isMobile) {
    return (
      <div className="mb-6 relative" ref={filterRef}>
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className={`w-full flex justify-between items-center px-4 py-3 rounded-lg border ${
            hasFilters ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
          } shadow-sm`}
        >
          <div className="flex items-center">
            <FilterIcon className="h-5 w-5 text-gray-600 mr-2" />
            <span className="font-medium text-gray-900">Course Filters</span>
            {hasFilters && (
              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {selectedCount} selected
              </span>
            )}
          </div>
          <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${
            isMobileFilterOpen ? 'transform rotate-180' : ''
          }`} />
        </button>

        {isMobileFilterOpen && (
          <div className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 max-h-[80vh] overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filter Courses</h3>
                <div className="flex space-x-2">
                  {hasFilters && (
                    <button
                      onClick={clearAll}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Clear all
                    </button>
                  )}
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              {renderFilterContent()}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop view
  return (
    <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div 
        className={`px-4 py-3 border-b border-gray-200 flex justify-between items-center ${
          hasFilters ? 'bg-blue-50' : 'bg-white'
        }`}
      >
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <FilterIcon className="h-5 w-5 text-blue-600 mr-2" />
          Filter by Course
          {hasFilters && (
            <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {selectedCount} selected
            </span>
          )}
        </h3>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => toggleAllCategories(true)}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            Expand All
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={() => toggleAllCategories(false)}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            Collapse All
          </button>
          {hasFilters && (
            <>
              <span className="text-gray-300">|</span>
              <button
                onClick={clearAll}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all
              </button>
            </>
          )}
        </div>
      </div>
      <div className="p-4">
        {renderFilterContent()}
      </div>
    </div>
  );
};

export default CourseFilter;

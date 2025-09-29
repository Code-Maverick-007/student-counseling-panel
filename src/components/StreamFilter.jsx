import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { streamCategories } from '../data/streamData';

export default function StreamFilter({ 
  selectedStreams, 
  onStreamToggle,
  className = '' 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredCategories = streamCategories.map(category => ({
    ...category,
    courses: category.courses.filter(course => 
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.courses.length > 0);

  const handleStreamSelect = (streamId) => {
    onStreamToggle(streamId);
  };

  const clearAllStreams = () => {
    selectedStreams.forEach(stream => onStreamToggle(stream));
  };

  return (
    <div className={`mb-6 ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-gray-900">Streams & Courses</h3>
        {selectedStreams.length > 0 && (
          <button
            onClick={clearAllStreams}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="relative" ref={dropdownRef}>
        <div 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-full p-2.5 border border-gray-300 rounded-md bg-white cursor-pointer hover:border-blue-500 transition-colors"
        >
          <div className="flex items-center">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-700">
              {selectedStreams.length > 0 
                ? `${selectedStreams.length} selected` 
                : 'Search streams & courses...'}
            </span>
          </div>
          <svg 
            className={`h-5 w-5 text-gray-400 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </div>

        {isDropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-96 overflow-auto">
            <div className="p-2 border-b sticky top-0 bg-white">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search streams & courses..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {filteredCategories.map((category) => (
                <div key={category.id} className="py-1">
                  <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-10 bg-gray-50 z-10 flex items-center">
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </div>
                  <div className="max-h-48 overflow-y-auto">
                    {category.courses.map((course) => (
                      <div 
                        key={course.id}
                        className={`px-4 py-2 text-sm cursor-pointer hover:bg-blue-50 ${
                          selectedStreams.includes(course.id) 
                            ? 'bg-blue-50 text-blue-700' 
                            : 'text-gray-700'
                        }`}
                        onClick={() => handleStreamSelect(course.id)}
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedStreams.includes(course.id)}
                            readOnly
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
                          />
                          <div className="flex flex-col">
                            <span className="font-medium">{course.name}</span>
                            {course.description && (
                              <span className="text-xs text-gray-500">
                                {course.description}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {filteredCategories.length === 0 && (
                <div className="px-4 py-3 text-sm text-gray-500 text-center">
                  No streams or courses found matching your search.
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {selectedStreams.length > 0 && (
        <div className="mt-3">
          <div className="flex flex-wrap gap-2">
            {selectedStreams.map((streamId) => {
              const stream = streamCategories
                .flatMap(cat => cat.courses.map(c => ({
                  ...c,
                  categoryName: cat.name,
                  categoryIcon: cat.icon
                })))
                .find(s => s.id === streamId);
              
              if (!stream) return null;
              
              return (
                <span 
                  key={streamId}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 transition-colors"
                  title={`${stream.name} (${stream.categoryName})`}
                >
                  <span className="mr-1">{stream.categoryIcon}</span>
                  {stream.name}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStreamSelect(streamId);
                    }}
                    className="ml-1.5 inline-flex items-center justify-center h-5 w-5 rounded-full text-blue-500 hover:bg-blue-200 hover:text-blue-700 transition-colors"
                    aria-label={`Remove ${stream.name}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

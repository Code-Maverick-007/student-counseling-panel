import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ChevronDown, Check } from 'lucide-react';

export default function StateFilter({ 
  selectedStates, 
  onStateToggle,
  availableStates 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter states based on search term
  const filteredStates = availableStates.filter(state =>
    state && typeof state === 'string' && state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleState = (state) => {
    onStateToggle(state);
  };

  const removeState = (state, e) => {
    e.stopPropagation();
    onStateToggle(state);
  };

  const clearAll = (e) => {
    e.stopPropagation();
    selectedStates.forEach(state => onStateToggle(state));
  };

  return (
    <div className="mb-6 relative" ref={dropdownRef}>
      <h3 className="text-lg font-medium text-gray-900 mb-2">Filter by State</h3>
      
      {/* Selected states display */}
      <div 
        className="relative cursor-pointer min-h-[42px] border border-gray-300 rounded-md bg-white p-2 flex flex-wrap items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedStates.length > 0 ? (
          <div className="flex flex-wrap gap-1 max-w-full">
            {selectedStates.slice(0, 3).map(state => (
              <span 
                key={state} 
                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800"
              >
                {state}
                <button 
                  onClick={(e) => removeState(state, e)}
                  className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500"
                >
                  <X className="h-2.5 w-2.5" />
                </button>
              </span>
            ))}
            {selectedStates.length > 3 && (
              <span className="text-xs text-gray-500 ml-1">+{selectedStates.length - 3} more</span>
            )}
          </div>
        ) : (
          <span className="text-gray-500 text-sm">Select states</span>
        )}
        <ChevronDown className={`h-5 w-5 text-gray-400 ml-auto transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg border border-gray-200">
          {/* Search input */}
          <div className="p-2 border-b border-gray-100">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search states..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* States list */}
          <div className="max-h-60 overflow-y-auto">
            {filteredStates.length > 0 ? (
              filteredStates.map((state) => (
                <div 
                  key={state}
                  className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => toggleState(state)}
                >
                  <span className={`flex items-center justify-center w-5 h-5 border rounded ${selectedStates.includes(state) ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-300'}`}>
                    {selectedStates.includes(state) && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <span className="ml-3">{state}</span>
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500">No states found</div>
            )}
          </div>

          {/* Clear all button */}
          {selectedStates.length > 0 && (
            <div className="p-2 border-t border-gray-100">
              <button
                onClick={clearAll}
                className="w-full text-left px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
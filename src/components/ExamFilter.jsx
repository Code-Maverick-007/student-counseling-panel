import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, X } from 'lucide-react';
import { examIndianCategories as examCategories } from '../data/indianExams';

export default function ExamFilter({ selectedExams, onExamToggle }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(new Set());

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

  const filteredCategories = examCategories.map(category => ({
    ...category,
    exams: category.exams.filter(exam => 
      exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.exams.length > 0);

  const toggleExam = (examId) => {
    onExamToggle(examId);
  };

  const clearAll = () => {
    selectedExams.forEach(examId => onExamToggle(examId));
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium text-gray-900">Entrance Exams</h3>
        {selectedExams.length > 0 && (
          <button
            onClick={clearAll}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search exams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
        {filteredCategories.map((category) => (
          <div key={category.category} className="border-b border-gray-200 pb-2">
            <button
              className="w-full flex justify-between items-center py-2 text-left font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => toggleCategory(category.category)}
            >
              <span>{category.category}</span>
              {expandedCategories.has(category.category) ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            
            {(expandedCategories.has(category.category) || searchTerm) && (
              <div className="ml-2 space-y-1">
                {category.exams.map((exam) => (
                  <div key={exam.id} className="flex items-center py-1">
                    <input
                      id={`exam-${exam.id}`}
                      type="checkbox"
                      checked={selectedExams.includes(exam.id)}
                      onChange={() => toggleExam(exam.id)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label 
                      htmlFor={`exam-${exam.id}`} 
                      className="ml-2 text-sm text-gray-700 cursor-pointer flex-1"
                    >
                      {exam.name}
                    </label>
                    {selectedExams.includes(exam.id) && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExam(exam.id);
                        }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {filteredCategories.length === 0 && (
          <div className="text-sm text-gray-500 py-2 text-center">
            No matching exams found
          </div>
        )}
      </div>
      
      {selectedExams.length > 0 && (
        <div className="mt-3 pt-2 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {selectedExams.map(examId => {
              let examName = '';
              examCategories.forEach(cat => {
                const found = cat.exams.find(e => e.id === examId);
                if (found) examName = found.name;
              });
              
              return (
                <span 
                  key={examId} 
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {examName}
                  <button 
                    onClick={() => toggleExam(examId)}
                    className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500"
                  >
                    <X className="h-2.5 w-2.5" />
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

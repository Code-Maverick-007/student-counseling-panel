import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fieldRecommendations } from '../data/interestQuiz';

const InterestRecommendations = () => {
  const [quizResults, setQuizResults] = useState(null);
  const [showFullRecommendations, setShowFullRecommendations] = useState(false);

  useEffect(() => {
    // Load quiz results from localStorage
    const savedResults = localStorage.getItem('interestQuizResults');
    if (savedResults) {
      try {
        const parsedResults = JSON.parse(savedResults);
        setQuizResults(parsedResults.results);
      } catch (error) {
        console.error('Error parsing quiz results:', error);
      }
    }
  }, []);

  if (!quizResults) {
    return (
      <div className="bg-gradient-to-r from-indigo-600 to-pink-500 rounded-2xl shadow-lg p-8 border border-pink-300 text-white">
  <div className="text-center">
    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    </div>
    <h3 className="text-2xl font-bold mb-3">Discover Your Career Interests</h3>
    <p className="text-pink-100 mb-6 max-w-md mx-auto">
      Take our interest quiz to get personalized career and course recommendations
    </p>
    <Link
      to="/quiz"
      className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
    >
      Take Interest Quiz
    </Link>
  </div>
</div>

    );
  }

  const primaryField = quizResults.primaryInterest;
  const recommendations = quizResults.recommendations;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div 
        className="p-6 text-white"
        style={{ backgroundColor: recommendations.color }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1">Your Interest Profile</h3>
            <p className="text-sm opacity-90">
              {recommendations.title} - {primaryField.percentage}% match
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{primaryField.percentage}%</div>
            <div className="text-xs opacity-90">Primary Interest</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4">{recommendations.description}</p>

        {/* Interest Breakdown */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">Interest Distribution</h4>
          <div className="space-y-2">
            {quizResults.allResults.slice(0, 3).map((field, index) => (
              <div key={field.field} className="flex items-center">
                <div className="w-20 text-xs font-medium text-gray-600">
                  {fieldRecommendations[field.field].title.split(' ')[0]}
                </div>
                <div className="flex-1 mx-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${field.percentage}%`,
                        backgroundColor: fieldRecommendations[field.field].color
                      }}
                    ></div>
                  </div>
                </div>
                <div className="w-8 text-xs font-semibold text-gray-700">
                  {field.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Recommendations */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Top Careers</h4>
            <div className="space-y-1">
              {recommendations.careers.slice(0, 3).map((career, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div 
                    className="w-1.5 h-1.5 rounded-full mr-2"
                    style={{ backgroundColor: recommendations.color }}
                  ></div>
                  <span className="text-gray-700">{career}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Recommended Courses</h4>
            <div className="space-y-1">
              {recommendations.courses.slice(0, 3).map((course, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div 
                    className="w-1.5 h-1.5 rounded-full mr-2"
                    style={{ backgroundColor: recommendations.color }}
                  ></div>
                  <span className="text-gray-700">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link
            to="/quiz"
            className="flex-1 text-center py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View Full Results
          </Link>
          <Link
            to="/colleges"
            className="flex-1 text-center py-2 px-4 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: recommendations.color }}
          >
            Find Colleges
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InterestRecommendations;

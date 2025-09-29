import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InterestQuiz from '../components/InterestQuiz';

const InterestQuizPage = () => {
  const navigate = useNavigate();
  const [existingResults, setExistingResults] = useState(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if user has already taken the quiz
    const savedResults = localStorage.getItem('interestQuizResults');
    if (savedResults) {
      try {
        const parsedResults = JSON.parse(savedResults);
        setExistingResults(parsedResults.results);
      } catch (error) {
        console.error('Error parsing saved quiz results:', error);
        localStorage.removeItem('interestQuizResults');
      }
    }
  }, []);

  const handleQuizComplete = (results) => {
    // Navigate to dashboard after quiz completion
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
  };

  const startQuiz = () => {
    setShowIntro(false);
    setExistingResults(null);
  };

  if (showIntro && !existingResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-xl p-8 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Discover Your Career Interests
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Take our comprehensive interest quiz to discover which career fields align with your passions and strengths
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick & Easy</h3>
                <p className="text-gray-600">15 simple questions that take just 5 minutes to complete</p>
              </div>

              <div className="p-6 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Personalized Results</h3>
                <p className="text-gray-600">Get detailed insights about your interests and career matches</p>
              </div>

              <div className="p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Career Guidance</h3>
                <p className="text-gray-600">Receive specific course and career recommendations</p>
              </div>
            </div>

            {/* What You'll Discover */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What You'll Discover</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-700">Your Primary Interest Field</p>
                    <p className="text-sm text-gray-600">Science, Commerce, Arts, or Medicine</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-700">Recommended Careers</p>
                    <p className="text-sm text-gray-600">Specific job roles that match your interests</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-700">Course Suggestions</p>
                    <p className="text-sm text-gray-600">Academic programs to pursue your goals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-700">Skill Development Areas</p>
                    <p className="text-sm text-gray-600">Key skills to focus on building</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={startQuiz}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Start Interest Quiz
            </button>

            <p className="text-sm text-gray-500 mt-4">
              No registration required • Results saved automatically
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <InterestQuiz 
        onQuizComplete={handleQuizComplete}
        existingResults={existingResults}
      />
    </div>
  );
};

export default InterestQuizPage;

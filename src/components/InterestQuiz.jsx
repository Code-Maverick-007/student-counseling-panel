import React, { useState, useEffect } from 'react';
import { 
  getAllQuizQuestions, 
  calculateQuizResults, 
  fieldRecommendations 
} from '../data/interestQuiz';

const InterestQuiz = ({ onQuizComplete, existingResults = null }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const questions = getAllQuizQuestions();

  useEffect(() => {
    if (existingResults) {
      setResults(existingResults);
      setShowResults(true);
      setIsCompleted(true);
    }
  }, [existingResults]);

  const handleAnswerSelect = (selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Quiz completed
        completeQuiz(newAnswers);
      }
    }, 500);
  };

  const completeQuiz = (finalAnswers) => {
    const quizResults = calculateQuizResults(finalAnswers);
    setResults(quizResults);
    setIsCompleted(true);
    setShowResults(true);
    
    // Save results to localStorage
    localStorage.setItem('interestQuizResults', JSON.stringify({
      results: quizResults,
      completedAt: new Date().toISOString(),
      answers: finalAnswers
    }));

    // Notify parent component
    if (onQuizComplete) {
      onQuizComplete(quizResults);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
    setResults(null);
    setShowResults(false);
    localStorage.removeItem('interestQuizResults');
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (showResults && results) {
    return <QuizResults results={results} onRetakeQuiz={resetQuiz} />;
  }

  if (isCompleted && !showResults) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Calculating your results...</p>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Interest Discovery Quiz</h2>
        <p className="text-gray-600 mb-4">
          Discover your career interests and get personalized field recommendations
        </p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          {questions[currentQuestion].question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 ${
                answers[currentQuestion]?.text === option.text
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  answers[currentQuestion]?.text === option.text
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {answers[currentQuestion]?.text === option.text && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                  )}
                </div>
                <span className="text-gray-700">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestion === 0}
          className={`px-6 py-2 rounded-lg ${
            currentQuestion === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
        >
          Previous
        </button>

        <div className="text-sm text-gray-500 flex items-center">
          {answers[currentQuestion] && (
            <span className="text-green-600">✓ Answered</span>
          )}
        </div>
      </div>
    </div>
  );
};

const QuizResults = ({ results, onRetakeQuiz }) => {
  const primaryField = results.primaryInterest;
  const secondaryField = results.secondaryInterest;
  const recommendations = results.recommendations;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Interest Profile</h2>
        <p className="text-gray-600 text-lg">
          Based on your responses, here's what we discovered about your interests
        </p>
      </div>

      {/* Primary Interest */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="text-center mb-6">
          <div 
            className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold"
            style={{ backgroundColor: recommendations.color }}
          >
            {primaryField.percentage}%
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Primary Interest: {recommendations.title}
          </h3>
          <p className="text-gray-600 text-lg">{recommendations.description}</p>
        </div>

        {/* Interest Breakdown */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* All Field Scores */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Interest Breakdown</h4>
            <div className="space-y-3">
              {results.allResults.map((field, index) => (
                <div key={field.field} className="flex items-center">
                  <div className="w-24 text-sm font-medium text-gray-600">
                    {fieldRecommendations[field.field].title.split(' ')[0]}
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="h-3 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${field.percentage}%`,
                          backgroundColor: fieldRecommendations[field.field].color
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-12 text-sm font-semibold text-gray-700">
                    {field.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Your Key Strengths</h4>
            <div className="flex flex-wrap gap-2">
              {recommendations.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: recommendations.color }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Career Recommendations */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Recommended Careers</h4>
            <div className="space-y-2">
              {recommendations.careers.slice(0, 6).map((career, index) => (
                <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: recommendations.color }}
                  ></div>
                  <span className="text-gray-700">{career}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Recommended Courses</h4>
            <div className="space-y-2">
              {recommendations.courses.slice(0, 6).map((course, index) => (
                <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: recommendations.color }}
                  ></div>
                  <span className="text-gray-700">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Interest */}
      {secondaryField.percentage > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Secondary Interest: {fieldRecommendations[secondaryField.field].title} ({secondaryField.percentage}%)
          </h4>
          <p className="text-gray-600 mb-4">
            {fieldRecommendations[secondaryField.field].description}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-gray-700 mb-2">Alternative Careers:</p>
              <div className="text-sm text-gray-600">
                {fieldRecommendations[secondaryField.field].careers.slice(0, 4).join(', ')}
              </div>
            </div>
            <div>
              <p className="font-medium text-gray-700 mb-2">Alternative Courses:</p>
              <div className="text-sm text-gray-600">
                {fieldRecommendations[secondaryField.field].courses.slice(0, 4).join(', ')}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="text-center">
        <button
          onClick={onRetakeQuiz}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
        >
          Retake Quiz
        </button>
        <button
          onClick={() => window.location.href = '/dashboard'}
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          View Dashboard
        </button>
      </div>
    </div>
  );
};

export default InterestQuiz;



import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AIAdvisorPage() {
  const { state, dispatch } = useApp();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "What career is best for me?",
    "Which college should I choose?",
    "What are the top engineering branches?",
    "How to prepare for medical entrance exams?",
    "What are the best scholarships available?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state.chatMessages]);

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    dispatch({ type: 'ADD_CHAT_MESSAGE', payload: { text: message, sender: 'user' } });
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      dispatch({ type: 'ADD_CHAT_MESSAGE', payload: { text: aiResponse, sender: 'ai' } });
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    if (message.includes('career')) {
      return "Based on your interests, you may want to explore careers in technology, healthcare, or business. Can you share your favorite subjects or activities?";
    } else if (message.includes('college')) {
      return "The right college depends on your course preference, budget, and location. Which field do you want to study?";
    } else if (message.includes('engineering')) {
      return "Top branches include CSE, ECE, Mechanical, Civil, and Chemical Engineering. Which branch excites you the most?";
    } else if (message.includes('medical')) {
      return "Focus on Biology, Chemistry, and Physics for NEET. Do you want a preparation plan?";
    } else if (message.includes('scholarship')) {
      return "Many scholarships exist based on merit, need, and category. Are you looking for government or private scholarships?";
    } else {
      return "I can help with careers, colleges, and study plans. Tell me more about what you're looking for!";
    }
  };

  const handleQuickQuestion = (question) => {
    handleSendMessage(question);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-pink-50 flex flex-col">
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full p-3 shadow-lg animate-pulse">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 ml-3 tracking-tight">
              AI Career Advisor
            </h1>
          </div>
          <p className="text-gray-700 text-base sm:text-lg max-w-xl mx-auto">
            Get <span className="text-indigo-600 font-semibold">personalized guidance</span> for careers, colleges, and your educational journey.
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl h-[70vh] flex flex-col overflow-hidden transition-all duration-300 hover:shadow-blue-200">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {state.chatMessages.length === 0 && (
              <div className="text-center py-10">
                <Bot className="h-16 w-16 text-indigo-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Welcome to <span className="text-indigo-600">AI Career Advisor!</span>
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Ask anything about careers, colleges, or courses to get started.
                </p>

                <div className="flex flex-wrap gap-3 justify-center">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 hover:scale-105 text-indigo-700 font-medium transition-all duration-300 shadow-md"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {state.chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start max-w-xs sm:max-w-md lg:max-w-lg space-x-2 ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                        : 'bg-gradient-to-br from-gray-200 to-gray-300'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-gray-700" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-3 rounded-2xl shadow-md transition-all duration-200 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                        : 'bg-white border border-gray-200 text-gray-800'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs mt-1 opacity-60">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-gray-600" />
                </div>
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-xl shadow-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
                placeholder="Ask me anything about careers, colleges, or education..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-shadow text-sm sm:text-base shadow-sm"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage(input)}
                disabled={!input.trim() || isTyping}
                className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg disabled:opacity-50"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            {state.chatMessages.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

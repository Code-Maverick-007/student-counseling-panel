import { useState } from 'react';
import { Star, MessageCircle, Video, Phone } from 'lucide-react';
import { mockCounselors } from '../data/counselors';
import { useApp } from '../context/AppContext';

export default function CounselorsPage() {
  const { dispatch } = useApp();
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [visibleCounselors, setVisibleCounselors] = useState(6);

  const handleBookSession = (counselor) => {
    dispatch({ type: 'CONNECT_COUNSELOR', payload: counselor });
    alert(`Session booked with ${counselor.name}! You will receive a confirmation email shortly.`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Career Counselors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with experienced counselors who can guide you through your career journey
          </p>
        </div>

        {/* Counselors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockCounselors.slice(0, visibleCounselors).map((counselor) => (
            <div key={counselor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={counselor.photo}
                    alt={counselor.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{counselor.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{counselor.specialization}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-700">{counselor.rating}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{counselor.experience} experience</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{counselor.about}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {counselor.languages.map((lang) => (
                    <span key={lang} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                      {lang}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>Availability: {counselor.availability}</span>
                </div>
                <button
                  onClick={() => handleBookSession(counselor)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {mockCounselors.length > 6 && (
          <div className="text-center">
            {visibleCounselors < mockCounselors.length ? (
              <button
                onClick={() => setVisibleCounselors(mockCounselors.length)}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Show More
              </button>
            ) : (
              <button
                onClick={() => setVisibleCounselors(6)}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>

      
    </div>
  );
}
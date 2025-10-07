import { useApp } from '../context/AppContext';
import { Bookmark, MapPin, Star, ExternalLink, Share2, MessageCircle, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CollegeCard({ college, showSaveButton = true }) {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const isSaved = state.savedColleges?.some(c => c.id === college.id) || false;

  const handleSave = (e) => {
    e.stopPropagation();
    if (isSaved) {
      dispatch({ type: 'REMOVE_SAVED_COLLEGE', payload: college.id });
    } else {
      dispatch({ type: 'SAVE_COLLEGE', payload: college });
    }
  };

  const handleCardClick = () => {
    navigate(`/colleges/${college.id}`);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: college.name,
        text: `Check out ${college.name} on our platform`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleApply = (e) => {
    e.stopPropagation();
    if (college.website) {
      window.open(college.website, '_blank', 'noopener,noreferrer');
    } else {
      alert('Application link not available');
    }
  };

  const handleTalkToCounselor = (e) => {
    e.stopPropagation();
    navigate('/counselors', { state: { fromCollege: college.id } });
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all cursor-pointer flex flex-col active:scale-[0.99] active:shadow-sm h-[380px]"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      aria-label={`View details for ${college.name}`}
    >
      {/* Image Section */}
      <div className="relative h-1/2">
        <img 
          src={college.image} 
          alt={college.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {showSaveButton && (
          <button 
            onClick={handleSave}
            className={`absolute top-2 right-2 p-2 rounded-full z-10 ${
              isSaved ? 'bg-blue-600 text-white' : 'bg-white/90 text-gray-600'
            } hover:bg-blue-50 hover:text-blue-600 transition-colors`}
            aria-label={isSaved ? 'Remove from saved' : 'Save college'}
          >
            <Bookmark className={`w-4 h-4 sm:w-5 sm:h-5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-2 sm:p-2.5 flex-grow flex flex-col">
        <div className="flex-grow flex flex-col">
          {/* Title and View Details */}
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 leading-tight flex-grow">
              {college.name}
            </h3>
            <span className="text-xs text-blue-600 flex items-center whitespace-nowrap flex-shrink-0">
              View <ExternalLink className="ml-0.5 w-3.5 h-3.5" />
            </span>
          </div>
          
          {/* Location */}
          <div className="flex items-center text-xs text-gray-600 mt-1">
            <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0 text-gray-500" />
            <span className="line-clamp-1">{college.location}</span>
          </div>
          
          {/* Rating and Fees */}
          <div className="flex items-center mt-1.5 flex-wrap gap-x-2">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="ml-0.5 text-xs font-medium text-gray-700">
                {college.rating?.toFixed(1) || 'N/A'}
              </span>
            </div>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-xs text-gray-600">{college.fees}</span>
          </div>
          
          {/* Course Tags */}
          <div className="flex flex-wrap gap-1 mt-2 pt-1 border-t border-gray-100">
            {college.courses?.slice(0, 2).map((course, index) => (
              <span 
                key={index} 
                className="px-1.5 py-0.5 bg-gray-100 text-gray-700 text-[10px] rounded whitespace-nowrap"
                title={course}
              >
                {course}
              </span>
            ))}
            {college.courses?.length > 2 && (
              <span className="px-1.5 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded whitespace-nowrap">
                +{college.courses.length - 2} more
              </span>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between gap-2">
          <button 
            onClick={handleShare}
            className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
          
          <button 
            onClick={handleApply}
            className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 text-xs text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Apply</span>
          </button>
          
          <button 
            onClick={handleTalkToCounselor}
            className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 text-xs text-green-600 hover:bg-green-50 rounded-md transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Counselor</span>
          </button>
        </div>
      </div>
    </div>
  );
}

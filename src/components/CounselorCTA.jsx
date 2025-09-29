import { Link } from 'react-router-dom';

const CounselorCTA = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white text-center my-8">
      <h3 className="text-2xl font-bold mb-4">Need Help Finding Your Path?</h3>
      <p className="text-green-100 mb-6 max-w-2xl mx-auto">
        Our expert counselors can help you find and apply for colleges, scholarships, and careers that match your profile.
      </p>
      <div className="space-x-4">
        <Link 
          to="/counselors"
          className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Talk to a Counselor
        </Link>
      </div>
    </div>
  );
};

export default CounselorCTA;

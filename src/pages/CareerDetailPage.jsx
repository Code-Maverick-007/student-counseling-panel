import { Link, useParams, useNavigate } from 'react-router-dom';
import { careerFlowcharts } from '../data/careerFlowcharts';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';

export default function CareerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the career by ID
  const career = careerFlowcharts.find(c => String(c.id) === String(id));

  if (!career) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center bg-white p-8 rounded-xl shadow">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Career not found</h1>
          <p className="text-gray-600 mb-6">We couldn't find the career flowchart you're looking for.</p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <ArrowLeft className="h-4 w-4" /> Go Back
          </button>
        </div>
      </div>
    );
  }

  // Handle potentially missing properties gracefully
  const courses = career.courses ?? career.courseCount ?? 'N/A';
  const duration = career.duration ?? 'Varies';
  const category = career.category ?? 'General';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <Link
            to="/career-explorer"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            View all careers
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            <img
              src={career.image}
              alt={career.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                {category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-600">
                <BookOpen className="h-3.5 w-3.5" /> {courses} Courses
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-600">
                <Clock className="h-3.5 w-3.5" /> {duration}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-3">{career.title}</h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              {career.description}
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Typical Path</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {(career.typicalPath || []).map((path, index) => (
                    <li key={index}>{path}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Popular Roles</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {(career.popularRoles || []).map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(career.title + ' courses in India')}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
              >
                Find Courses
              </a>
              <a
                href={`https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(career.title)}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                Explore Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

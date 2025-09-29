import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

export default function EducationDetails({
  tenthMarks,
  twelfthMarks,
  stream,
  onTenthMarksChange,
  onTwelfthMarksChange,
  onStreamChange,
}) {
  const [isStreamOpen, setIsStreamOpen] = useState(false);
  
  const streams = [
    'Science (PCM)',
    'Science (PCB)',
    'Commerce',
    'Arts',
    'Diploma',
    'Other'
  ];

  const clearAll = () => {
    onTenthMarksChange('');
    onTwelfthMarksChange('');
    onStreamChange('');
  };

  const hasValues = tenthMarks !== '' || twelfthMarks !== '' || stream !== '';

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium text-gray-900">Education Details</h3>
        {hasValues && (
          <button
            onClick={clearAll}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Clear all
          </button>
        )}
      </div>
      
      <div className="space-y-4 bg-white p-4 rounded-lg border border-gray-200">
        <div className="relative">
          <label htmlFor="tenth-marks" className="block text-sm font-medium text-gray-700 mb-1">
            10th Percentage (%)
          </label>
          <div className="relative">
            <input
              type="number"
              id="tenth-marks"
              min="0"
              max="100"
              value={tenthMarks}
              onChange={(e) => onTenthMarksChange(e.target.value === '' ? '' : Number(e.target.value))}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter 10th percentage"
            />
            {tenthMarks !== '' && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={() => onTenthMarksChange('')}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="relative">
          <label htmlFor="twelfth-marks" className="block text-sm font-medium text-gray-700 mb-1">
            12th/Diploma Percentage (%)
          </label>
          <div className="relative">
            <input
              type="number"
              id="twelfth-marks"
              min="0"
              max="100"
              value={twelfthMarks}
              onChange={(e) => onTwelfthMarksChange(e.target.value === '' ? '' : Number(e.target.value))}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter 12th/Diploma percentage"
            />
            {twelfthMarks !== '' && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={() => onTwelfthMarksChange('')}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Stream
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsStreamOpen(!isStreamOpen)}
              className="w-full flex justify-between items-center px-3 py-2 border border-gray-300 rounded-md text-left text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <span className={stream ? 'text-gray-900' : 'text-gray-500'}>
                {stream || 'Select your stream'}
              </span>
              <ChevronDown className={`h-4 w-4 text-gray-400 ${isStreamOpen ? 'transform rotate-180' : ''}`} />
            </button>
            
            {isStreamOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200">
                <div className="py-1 max-h-60 overflow-auto">
                  {streams.map((s) => (
                    <div
                      key={s}
                      className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                        stream === s ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                      }`}
                      onClick={() => {
                        onStreamChange(s);
                        setIsStreamOpen(false);
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {hasValues && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tenthMarks !== '' && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              10th: {tenthMarks}%
              <button 
                onClick={() => onTenthMarksChange('')}
                className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500"
              >
                <X className="h-2.5 w-2.5" />
              </button>
            </span>
          )}
          
          {twelfthMarks !== '' && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              12th/Diploma: {twelfthMarks}%
              <button 
                onClick={() => onTwelfthMarksChange('')}
                className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500"
              >
                <X className="h-2.5 w-2.5" />
              </button>
            </span>
          )}
          
          {stream && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {stream}
              <button 
                onClick={() => onStreamChange('')}
                className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500"
              >
                <X className="h-2.5 w-2.5" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
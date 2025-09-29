export default function MarksFilter({ minMarks, onMarksChange }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Minimum Eligibility</h3>
      <div className="px-1">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Marks: {minMarks}%</span>
        </div>
        <input
          type="range"
          min="50"
          max="100"
          step="1"
          value={minMarks}
          onChange={(e) => onMarksChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
      {minMarks > 0 && (
        <button
          onClick={() => onMarksChange(0)}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
        >
          Clear filter
        </button>
      )}
    </div>
  );
}

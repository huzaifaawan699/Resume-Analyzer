import React from 'react';

const AnalysisResults = ({ results }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Analysis Results</h2>
      <div className="border p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
        <p className="text-lg text-gray-700">
          {results ? results.summary : 'No results available'}
        </p>
      </div>
    </div>
  );
};

export default AnalysisResults;

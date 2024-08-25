import React from 'react';

const JobMatch = ({ jobMatches }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Job Matches</h2>
      <div className="border p-6 rounded-lg shadow-lg bg-green-50 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
        {jobMatches.length ? (
          <ul>
            {jobMatches.map((job, index) => (
              <li key={index} className="mb-2 p-4 bg-white rounded-lg shadow-md hover:bg-green-100 transition-colors duration-300 ease-in-out">
                <p className="text-lg font-semibold text-gray-800">{job.title}</p>
                <p className="text-gray-600">{job.company}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No job matches found</p>
        )}
      </div>
    </div>
  );
};

export default JobMatch;

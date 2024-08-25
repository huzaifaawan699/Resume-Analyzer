import React from 'react';

const Feedback = ({ feedback }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Feedback</h2>
      <div className="border p-6 rounded-lg shadow-lg bg-yellow-50 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
        <p className="text-lg text-gray-800">
          {feedback ? feedback.message : 'No feedback available'}
        </p>
      </div>
    </div>
  );
};

export default Feedback;

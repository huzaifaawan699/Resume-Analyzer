import React, { useState } from 'react';
import { uploadResume } from '../api/apiService';

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const result = await uploadResume(file);
        setResponse(result.data);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Error uploading resume:', error);
        setError('Error uploading resume. Please try again.');
      }
    }
  };

  return (
    <div className="upload-resume-container">
      <h2 className="header">Upload Your Resume</h2>
      <form className="upload-form" onSubmit={handleSubmit}>
        <input
          type="file"
          className="file-input"
          onChange={handleFileChange}
        />
        <button type="submit" className="upload-button">
          Upload
        </button>
      </form>
      {response && (
        <div className="response-container">
          <h3 className="response-header">Analysis Results:</h3>
          <pre className="response-data">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default UploadResume;

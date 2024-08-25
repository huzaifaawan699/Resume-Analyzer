import React, { useState } from 'react';
import UploadResume from './Conponents/UploadResume';
import ResumePreview from './Conponents/ResumePreview';
import AnalysisResults from './Conponents/AnalysisResults';
import FeedbackComponent from './Conponents/Feedback';
import JobMatchComponent from './Conponents/JobMatch';
import './index.css'; 

const App = () => {
  const [resume, setResume] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [jobMatches, setJobMatches] = useState([]);

  const handleFileUpload = (file) => {
    // Handle file upload and set state
    setResume({ name: file.name });
    // Simulate API call
    setAnalysisResults({ summary: 'Sample analysis summary' });
    setFeedback({ message: 'Sample feedback message' });
    setJobMatches([{ title: 'Sample Job', company: 'Sample Company' }]);
  };

  return (
    <div className="App">
      <UploadResume onFileUpload={handleFileUpload} />
      <ResumePreview resume={resume} />
      <AnalysisResults results={analysisResults} />
      <FeedbackComponent feedback={feedback} />
      <JobMatchComponent jobMatches={jobMatches} />
    </div>
  );
};

export default App;

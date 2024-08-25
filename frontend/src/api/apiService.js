// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/resumes'; // Replace with your backend URL

export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append('resume', file);

  const response = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return response;
};

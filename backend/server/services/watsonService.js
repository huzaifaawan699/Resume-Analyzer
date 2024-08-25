// services/watsonService.js

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
require('dotenv').config();

const assistant = new AssistantV2({
  version: '2021-06-14',
  authenticator: new IamAuthenticator({
    apikey: process.env.WATSON_API_KEY,  // Your Watson API key from .env
  }),
  serviceUrl: process.env.WATSON_SERVICE_URL,  // Your Watson service URL from .env
});

// Create a new session
const createSession = async () => {
  try {
    const response = await assistant.createSession({
      assistantId: process.env.WATSON_ASSISTANT_ID,  // Your Watson Assistant ID from .env
    });
    return response.result.session_id;
  } catch (error) {
    console.error('Error creating session:', error);
    throw error;
  }
};

// Send a message to Watson Assistant
const sendMessage = async (sessionId, message) => {
  try {
    const response = await assistant.message({
      assistantId: process.env.WATSON_ASSISTANT_ID,  // Your Watson Assistant ID from .env
      sessionId: sessionId,
      input: {
        'message_type': 'text',
        'text': message,
      },
    });
    return response.result.output.generic;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

module.exports = { createSession, sendMessage };

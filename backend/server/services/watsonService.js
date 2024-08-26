const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV1({
  version: '2021-06-14',
  authenticator: new IamAuthenticator({
    apikey: 'YOUR_API_KEY',
  }),
  serviceUrl: 'YOUR_SERVICE_URL',
});

const params = {
  assistantId: 'YOUR_ASSISTANT_ID',
  sessionId: 'YOUR_SESSION_ID',
  input: {
    'message_type': 'text',
    'text': 'Hello',
  },
};

assistant.message(params)
  .then(response => {
    console.log(JSON.stringify(response, null, 2));
  })
  .catch(err => {
    console.error('error:', err);
  });

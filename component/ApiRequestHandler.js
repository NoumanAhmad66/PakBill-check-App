// ApiRequestHandler.js

import React, { useState } from 'react';

const ApiRequestHandler = ({ apiUrl, onSuccess, onError }) => {
  const [apiResponse, setApiResponse] = useState('');

  const makeApiRequest = () => {
    fetch(apiUrl, {
      headers: {
        'Content-Type': 'text/html',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log('API Response:', data);
        setApiResponse(data);
        onSuccess(data);
      })
      .catch(error => {
        console.error('Error during API request:', error);
        onError(error);
      });
  };
  
  

  return {
    apiResponse,
    makeApiRequest,
  };
};

export default ApiRequestHandler;

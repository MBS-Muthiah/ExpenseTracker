import React from 'react';
import ReactDOM from 'react-dom';
// Remove the following import
// import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  // Remove SpeechProvider and related code
  // <SpeechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US">
    <Provider>
      <App />
    </Provider>,
  // </SpeechProvider>,
  document.getElementById('root'),
);

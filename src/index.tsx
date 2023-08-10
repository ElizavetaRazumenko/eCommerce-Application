import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import state from './state/state';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
);

reportWebVitals();

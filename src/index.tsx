import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import '../src/pages/2. main page/components/header.scss';
import '../src/pages/2. main page/components/main.scss';

import App from './app/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

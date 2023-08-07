import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import './pages/globalComponents/main/main.scss';
import './pages/globalComponents/style.scss';

import './pages/globalComponents/main/components//drinks/chooseDrinks.scss';

import App from './app/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();

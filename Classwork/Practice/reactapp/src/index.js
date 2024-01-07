import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Default/App';
import App1 from './Day1/App1';
import AppPractice from './Practice/AppPractice';
import reportWebVitals from './reportWebVitals';
import App2
 from './Day2/App2';
import App3 from './Day4/App3';
import App4 from './Day4/App4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppPractice/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

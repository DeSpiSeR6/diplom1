import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UpperHeader from './header/UpperHeader'
import reportWebVitals from './reportWebVitals';
import Body1 from './body1/Body1';
import Body2 from './body2/Body2';
import Body3 from './body3/Body3';
import Body4 from './body4/Body4';
import Body5 from './body5/Body5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UpperHeader />
    <Body1 />
    <Body2 />
    <Body3 />
    <Body4 />
    <Body5 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

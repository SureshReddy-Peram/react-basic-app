import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import ReactElement from './ReactElement';
//import ReactElement5 from './ReactElement5';
import FunctionalComp from './FunctionalComp';
import ClassBasedComp from './ClassBasedComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FunctionalComp name="Suresh Reddy"/>
    <ClassBasedComp message = "React is Great" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

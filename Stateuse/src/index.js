import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Input from './Use/Input';
import Formstate3 from './Use/Formstate3';
import Tablesubmit from './Use/Tablesubmit';
import Formproduct from './Use/Formproduct';
import Arraystate from './Use/Form4';
import Form4 from './Use/Form4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Input/> */}
    {/* <Formstate3/> */}
    {/* <Tablesubmit/> */}
    {/* <Formproduct/> */}
    {/* <Arraystate/> */}
    {/* <Form4/> */}
    <Formset/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

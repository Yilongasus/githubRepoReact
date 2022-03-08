import React from 'react';
import ReactDOM from 'react-dom';
// 1-2 引入用npm載下來的React和ReactDOM

import './index.css';
import reportWebVitals from './reportWebVitals';

const style = {fontFamily: 'Arial', color: '#FF0000'};

ReactDOM.render(
  <React.StrictMode>
    <h1 style= {style}>Hello world!</h1>
  </React.StrictMode>,
  document.getElementById('root')
);
// React的程式進入點

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
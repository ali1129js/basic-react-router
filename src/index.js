/**
 * @Author: Ali Ismail
 * @Date:   2018-04-15T20:30:45+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-15T20:32:38+02:00
 */



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
  , document.getElementById('root'));
registerServiceWorker();

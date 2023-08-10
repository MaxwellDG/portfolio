import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import './css/App.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

Modal.setAppElement('#root');

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);
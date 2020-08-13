import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ModalsReducer from './reducers/modals'
import './css/index.css';
import App from './App';

const store = createStore(ModalsReducer)

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
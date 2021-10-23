import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import middleware from './middleware';
import reducer from './reducers';
let store = createStore(reducer, middleware)
render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
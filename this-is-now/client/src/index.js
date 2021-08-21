import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))




ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
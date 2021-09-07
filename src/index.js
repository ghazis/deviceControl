import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducer.js';
import thunk from 'redux-thunk';
import App from './App';
import './index.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
   <Provider store={store}>
   	  <BrowserRouter>
        <App />
      </BrowserRouter>
   </Provider>,
   document.getElementById('app')
);

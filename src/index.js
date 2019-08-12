// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer);

ReactDOM.render(
  <Provider store={store}>
   <div>
    <App />
    </div>
  </Provider> ,
  document.getElementById('root')
);

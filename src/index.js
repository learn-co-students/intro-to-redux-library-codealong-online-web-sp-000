// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

//pass the newly create store into the app

const store = createStore(shoppingListItemReducer);
//calling the create store method
//reducer is passed into it
shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); /* code change */

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider> /* code change */,
 document.getElementById('root')
);

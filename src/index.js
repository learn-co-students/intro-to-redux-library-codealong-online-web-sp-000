// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* import the createStore method from the redux library...no more writing it by hand! */
import {Provider} from 'react-redux' /* import the Provider component from the react-redux library. The Provider wraps the top-level component --<App /> in this case (see below) -- and allows for the store to be passed in only once. no more prop hell!*/
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

//this code allows the provider to access store. the var calls createStore (a redux method) and passes in our reducer. the two window references 1) look for a method called __REDUX_DEVTOOLS_EXTENSION__ and if there, it 2) executes the method
const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

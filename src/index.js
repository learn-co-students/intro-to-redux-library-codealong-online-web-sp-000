// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
//used to avoid passing store as a prop
import { Provider } from 'react-redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer,  /* code change */
 
//add Redux tools extension 
//accessing browser to find method devtools extension 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); /* code change */

// code change - added Provider to wrap around App
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider> /* code change */,
    document.getElementById('root')
  );

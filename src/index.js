// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


//code change - added Provider to wrap around the app
//Provider wraps the top level component (App, in this case) and is the only component where store is passed in.
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
document.getElementById('root')
);

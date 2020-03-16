// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
// import { createStore, applyMiddleware } from 'redux'; /* code change */
// import { composeWithDevTools } from 'redux-devtools-extension'; /* code change */
import { Provider } from 'react-redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

// const store = createStore(shoppingListItemReducer);

const store = createStore(
    shoppingListItemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// or

// const store = createStore(
//     shoppingListItemReducer,
//     composeWithDevTools(applyMiddleware(...middleware),
//     // other store enhancers if any
// ));



// ReactDOM.render(<App />, document.getElementById('root'));

// code change - added Provider to wrap around App
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// By including the Provider, you'll be able to access the Redux store
// and/or dispatch actions from any component you want,
// regardless of where it is on the component tree.

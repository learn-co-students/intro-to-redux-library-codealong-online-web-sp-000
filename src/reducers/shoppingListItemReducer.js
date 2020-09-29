export default function shoppingListItemReducer(
	state = {
	  items: []
	},
	action
  ) {

	// At the top of the function, we are logging the action. After the case statement, we are storing our state as current state first. Then we are logging the updating state value. Then under the default case statement, we just can log the previous state because this state is unchanged.
	console.log(action);
	switch (action.type) {
	  case 'INCREASE_COUNT':
		console.log('Current state.items length %s', state.items.length);
		console.log('Updating state.items length to %s', state.items.length + 1);
		return {
		  ...state,
		  items: state.items.concat(state.items.length + 1)
		};
   
	  default:
		console.log('Initial state.items length: %s', state.items.length);
		return state;
	}
  }

 // we call our createStore() method in src/index.js. We pass our createStore() method a reducer, and then we pass our newly created store to our App component as a prop.
 // our reducer is just producing a counter. 
 //let the Redux library take care of our createStore function. 
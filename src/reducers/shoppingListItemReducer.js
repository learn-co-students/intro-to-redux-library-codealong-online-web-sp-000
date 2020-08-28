export default function shoppingListItemReducer(
	state = {
	  items: []
	},
	action
  ) {
	console.log(action);
	switch (action.type) {
	  case 'INCREASE_COUNT':
		console.log('Current state.items length %s', state.items.length);
		console.log('Updating state.items length to %s', state.items.length + 1);
		return {
		  ...state,
		  items: state.items.concat(state.items.length + 1)
		//The concat() method is used to merge two or more arrays. 
		//This method does not change the existing arrays, but instead returns a new array.
      };
 
	  default:
			console.log('Initial state.items length: %s', state.items.length);
			return state;
		}
	  }
//this reducer is imported into our index.js file so when createStore calls the dispatch method, it can pass the reducer -- in this case one that increases the number of items on a list -- which can take an action and update the state

export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	//add this check and the logs in the switch so that we can debug our action and state
	console.log(action);

	switch (action.type) {
		// this case adds a new item to a list and that number is 1 more than the previous item
		case 'INCREASE_COUNT':
			console.log('Current state.items length %s', state.items.length);
      console.log('Updating state.items length to %s',  state.items.length + 1);

			//added the code below to check our shopping list items
			return Object.assign({}, state, {
        items: state.items.concat(state.items.length + 1)
      });


		default:
			console.log('Initial state.items length: %s', state.items.length)

			return state;

	}
}

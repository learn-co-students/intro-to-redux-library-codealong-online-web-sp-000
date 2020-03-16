// export default function shoppingListItemReducer(state = {items: []}, action) {
// 	switch (action.type) {
// 	case 'INCREASE_COUNT':
// 		return {
// 		...state,
// 		items: state.items.concat(state.items.length + 1)
// 		}
// 	default:
// 		return state;
// 	}
// }

export default function shoppingListItemReducer(state = {items: []}, action) {
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

// on line 14: you'e logging the action.

// on line 22 - after the case statement -
// you're storing state as current state first,
// then logging the updating state value.

// on line 27 - after the default case statement -
// you can log the previous state because this state is unchanged.

// while you aren't getting your state directly from the store,
// you're still dispatching actions.

// you know this to be true b/c each time you click a button, you're calling store.dispatch({ type: 'INCREASE_COUNT' })
// and somehow this is hitting the reducer. So things are happening.

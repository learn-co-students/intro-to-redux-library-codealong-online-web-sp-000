export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	console.log(action); //logging the action
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current state.items length %s', state.items.length); //storing the state as current state
			console.log('Updating state.items length to %s', state.items.length + 1); //logging the updated state value
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		default:
			console.log('Initial state.items length: %s', state.items.length); //log the previous state because this state is unchanged
			return state;
	}
}

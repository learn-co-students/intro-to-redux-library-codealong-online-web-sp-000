export default function shoppingListItemReducer(     // has a STATE and ACTION as arguments
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return return {
        ...state,
        items: state.items.concat(state.items.length + 1)
      }   // adds a new item to the list each time it is called, and that item is one more than the last item.

    default:
      return state;
  }
}

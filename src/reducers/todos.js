
function todos(state=[], action) {
  switch (action.type) {
    case 'ADD_TODO':
      const id = state.length === 0 ? 0 : state[state.length-1].id + 1;
      return [...state,
              { id, text: action.text, completed: false }
             ]
    case 'COMPLETE_TODO':
      return state.map((todo) => {
        return todo.id === action.id
                 ? Object.assign({}, todo, {completed:true})
                 : todo
      })
    default:
      return state
  }
}

export default todos

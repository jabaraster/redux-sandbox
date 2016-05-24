import { createStore, combineReducers } from 'redux'

function addTodo(text) {
  return { type: 'ADD_TODO', text }
}
function completeTodo(id) {
  return { type: 'COMPLETE_TODO', id }
}
function setVisibilityFilter(filter) {
  return { type: 'SET_VISIBILITY_FILTER', filter }
}

function todos(state=[], action) {
  switch (action.type) {
    case 'ADD_TODO':
      const id = state.length === 0 ? 0 : state[state.length-1].id + 1;
      return [...state,
              { id, text: action.text, completed: false }
             ]
    case 'COMPLETE_TODO':
      return state.map((todo) => {
        return todo
      })
      return state
    default:
      return state
  }
}
function visibilityFilter(state='SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
const todoApp = combineReducers({ todos, visibilityFilter });

const initialState = {
  todos: [
    { id: 0, text: 'WEB+DB PRESSの原稿書く', completed: true },
    { id: 1, text: '燃えるゴミを捨てる', completed: false }
  ],
  visibilityFilter: 'SHOW_ALL'
}
const store = createStore(todoApp, initialState);
store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('電球を替える'));
store.dispatch(completeTodo(2));
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

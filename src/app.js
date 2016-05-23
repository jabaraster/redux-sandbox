import { createStore } from 'redux'

function incrementCounter() {
  return { type: 'INCREMENT_COUNTER' }
}

function decrementCounter() {
  return { type: 'DECREMENT_COUNTER' }
}

function counter(state = {counter: 0}, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { counter: state.counter + 1 }
    case 'DECREMENT_COUNTER':
      return { counter: state.counter - 1 }
    default:
      return state
  }
}

const store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());


import React from 'react' // JSXコンパイル後のソースで必要なので、たとえ本ソースファイルに明示的にReactが参照されていなくてもこのimportは必要.
import { createStore } from 'redux'

import { Provider } from 'react-redux'

import todoApp from './reducers'
import App from './components/App'

import { render } from 'react-dom'

const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
}

const store = createStore(todoApp, initialState);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('container')
)

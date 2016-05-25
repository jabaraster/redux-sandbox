
import React, { PropTypes } from 'react'
// これではダメ？ import { React, PropTypes } from 'react'

const TodoList = ({todos}) => {
  return (
    <ul>
      {todos.map(todo => {
         return ( <li key={todo.id}>{todo.text}</li> );
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList

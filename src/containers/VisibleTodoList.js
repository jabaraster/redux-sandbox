
import { connect } from 'react-redux' // なぜ {  } が要る？
import TodoList from '../components/TodoList'

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => { todo.completed })
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => { !todo.completed })
    default:
      return todos
  }
}

function mapStateToProps(state) {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter) }
}

const VisibleTodoList = connect(mapStateToProps)(TodoList)

export default VisibleTodoList

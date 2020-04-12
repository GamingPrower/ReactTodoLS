import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, dispatch }) => {
	return todos.map(todo =>
		<Todo
			key={ todo.id }
			todo={ todo }
			todos={ todos }
			dispatch={ dispatch }
		/>
	)
}

export default TodoList

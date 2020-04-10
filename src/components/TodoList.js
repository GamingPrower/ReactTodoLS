import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
	return todos.map(todo =>
		<Todo
			key={ todo.id }
			todo={ todo }
			todos={ todos }
			setTodos={setTodos}
		/>
	)
}

export default TodoList

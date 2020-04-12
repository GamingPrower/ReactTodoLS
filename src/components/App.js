import React, { useReducer } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import reducer, { initTodos } from './reducer'

const App = () => {
	const [todos, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')), initTodos);

	return (
		<div className="ui raised very padded text container segment">
			<div className="ui celled list">
				<TodoList todos={todos} dispatch={dispatch} />
			</div>
			<Form todos={todos} dispatch={dispatch} />
		</div>
	)
}

export default App

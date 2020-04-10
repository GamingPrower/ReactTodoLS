import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'

const App = () => {
	// Retrieve todos from localStorage. If none exist, set an empty array.
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));
	if (!todos) setTodos([]);

	return (
		<div className="ui raised very padded text container segment">
			<div className="ui celled list">
				<TodoList todos={todos} setTodos={setTodos} />
			</div>
			<Form todos={todos} setTodos={setTodos} />
		</div>
	)
}

export default App

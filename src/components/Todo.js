import React from 'react'

const Todo = ({ todo, todos, setTodos }) => {
	const toggleCompleted = () => {
		// Find the index of the todo we want to modify
		const todoIndex = todos.findIndex(({ id }) => id === todo.id);

		// Create a new array that modifies selected todo
		const newTodos = todos.map((todo, i) => {
			if (i === todoIndex) {
				todo.completed = !todo.completed;
			}
			return todo;
		});

		// Update state and localStorage
		setTodos(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
	}

	const handleDelete = () => {
		// Filter out todo to be deleted
		const newTodos = todos.filter(currentTodo => currentTodo.id !== todo.id);

		// Update state and localStorage
		setTodos(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
	};

	return (
		<div className="item" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
			<div className="content">
				<h4>
					{todo.text}
				</h4>
			<button className="mini ui icon basic button" onClick={toggleCompleted}>
				<i className="check icon"></i>
			</button>
			<button className="mini ui icon button" onClick={handleDelete}>
				<i className="close icon"></i>
			</button>
			</div>
		</div>
	)
}

export default Todo

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Form = ({ todos, setTodos }) => {
	// Initialize input field state
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;

		// Update state and localStorage with new todo
		setTodos([...todos, { text: value, completed: false, id: uuidv4() }]);
		localStorage.setItem('todos', JSON.stringify([...todos, { text: value, completed: false, id: uuidv4() }]));
		// Reset input field
		setValue('');
	};

	return (
		<form>
			<div className="ui input">
				<input
					name="todoInput"
					value={value}
					onChange={e => setValue(e.target.value)} />
			</div>
			<button
				className="ui teal button"
				onClick={handleSubmit}>Add Todo</button>
		</form>
	);
}

export default Form

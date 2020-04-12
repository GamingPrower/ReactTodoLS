import React, { useState } from 'react'

const Form = ({ todos, dispatch }) => {
	// Initialize input field state
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;

		// Dispatch new todo
		dispatch({ type: 'ADD_TODO', payload: value });
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

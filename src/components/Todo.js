import React from 'react'

const Todo = ({ todo, todos, dispatch }) => {

	return (
		<div className="item" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
			<div className="content">
				<h4>
					{todo.text}
				</h4>
			<button className="mini ui icon basic button" onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: { todos: todos, id: todo.id } })}>
				<i className="check icon"></i>
			</button>
			<button className="mini ui icon button" onClick={() => dispatch({ type: 'DELETE_TODO', payload: { todos: todos, id: todo.id } })}>
				<i className="close icon"></i>
			</button>
			</div>
		</div>
	)
}

export default Todo

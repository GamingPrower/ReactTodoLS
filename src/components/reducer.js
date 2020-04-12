import { v4 as uuidv4 } from 'uuid'

export const initTodos = (state) => {
	let todos = state ? [...state] : [];

	localStorage.setItem('todos', JSON.stringify(todos));
	return todos;
}

export default (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			const todoId = uuidv4();
			localStorage.setItem('todos', JSON.stringify([...state, { text: action.payload, completed: false, id: todoId }]));
			return [...state, { text: action.payload, completed: false, id: todoId }];

		case 'TOGGLE_TODO':
			const newTodos = action.payload.todos.map(todo => {
				if (todo.id === action.payload.id) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
			localStorage.setItem('todos', JSON.stringify(newTodos));
			return newTodos;

		case 'DELETE_TODO':
			const filteredTodos = action.payload.todos.filter(currentTodo => currentTodo.id !== action.payload.id);
			localStorage.setItem('todos', JSON.stringify(filteredTodos));
			return filteredTodos;

		default:
			return state;
	}
};
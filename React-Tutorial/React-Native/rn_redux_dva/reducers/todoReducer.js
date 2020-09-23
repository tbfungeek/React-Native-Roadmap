import { TODO_ADD_ACTION, TODO_SET_VISIBILITY_FILTER_ACTION, TODO_TOGGLE_ACTION } from '../actions/types';

let initialState = {
    todos: [

    ],
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case TODO_ADD_ACTION:
            return {
				...state,
				todos: [
					{
						id: action.payloads.id,
						text: action.payloads.text,
						completed: false
					},
					...state.todos
				]
            }
		case TODO_TOGGLE_ACTION: {

            return {
                ...state,
                todos:state.todos.map((todo) => (todo.id === action.payloads.id ? { ...todo, completed: !todo.completed } : todo))
            };
        }
		case TODO_SET_VISIBILITY_FILTER_ACTION:
			return { ...state, filter: action.payloads.filter };
		default:
			return state;
	}
};

export default todoReducer;

import { TODO_ADD_ACTION, TODO_SET_VISIBILITY_FILTER_ACTION, TODO_TOGGLE_ACTION } from './types';

let nextTodoId = 0;

export const addTodoAction = text => {
    return {
	type: TODO_ADD_ACTION,
	payloads: {
		id: nextTodoId++,
		text
    }
}};

export const setVisibilityFilterAction = filter => {
    return {
	type: TODO_SET_VISIBILITY_FILTER_ACTION,
	payloads: {
		filter
	}
}};

export const toggleTodoAction = id => {
    return {
	type: TODO_TOGGLE_ACTION,
	payloads: {
		id
	}
}};

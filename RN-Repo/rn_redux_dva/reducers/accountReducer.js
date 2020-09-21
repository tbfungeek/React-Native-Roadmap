import {
	ACCOUNT_LOGIN_ACTION_TYPE,
	ACCOUNT_LOGOUT_ACTION_TYPE
} from '../actions/types'

let initialState = {
    username:""
}

const accountReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACCOUNT_LOGIN_ACTION_TYPE:
			return { ...state, username: action.payloads.username };
		case ACCOUNT_LOGOUT_ACTION_TYPE:
			return { ...state, username: '' };
		default:
			return state;
	}
}

export default accountReducer;
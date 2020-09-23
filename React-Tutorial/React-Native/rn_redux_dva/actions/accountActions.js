import { 
	ACCOUNT_LOGIN_ACTION, 
	ACCOUNT_LOGOUT_ACTION 
} from './types';

export const loginAction = (username) => ({
	type: ACCOUNT_LOGIN_ACTION,
	payloads: {
		username: username
	}
});

export const loginOutAction = () => ({
	type: ACCOUNT_LOGOUT_ACTION,
});

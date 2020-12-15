import {combineReducers} from 'redux';

export const ACTION_COUNT_ADD = "ACTION_COUNT_ADD";
export const ACTION_UPDATE_USER_NAME = "ACTION_UPDATE_USER_NAME";

const initialCountStore =  {
    count:0
};

const countReducer = (state = initialCountStore ,action) => {
    switch(action.type) {
        case ACTION_COUNT_ADD:
        return {
            ...state,
            count: state.count + action.payload,
        }
        default:
        return state;
    }
}

const initialUserStore = {
    username:""
};

const userReducer = (state = initialUserStore,action) => {
    switch(action.type) {
        case ACTION_UPDATE_USER_NAME:
        return {
            ...state,
            username: action.payload
        }
        default:
        return state;
    }
}

export default combineReducers({
    count:countReducer,
    user:userReducer
});
import {combineReducers} from 'redux';
import accountReducer from './accountReducer'
import todoReducer from './todoReducer'

export const RootReducer = combineReducers({
    accountReducer,
    todoReducer
})
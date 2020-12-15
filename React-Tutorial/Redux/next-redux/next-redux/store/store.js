import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import RootReducer from '../reducers/rootReducer'

export default function createReducerStore (state){
	const store = createStore(
      RootReducer,
	  Object.assign({}, state),
	  composeWithDevTools(applyMiddleware(thunk))
    )
    return store
}
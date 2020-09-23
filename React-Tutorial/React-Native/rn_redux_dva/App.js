import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import {RootReducer} from './reducers/index';
import { createStore ,applyMiddleware} from 'redux';
import Filters from './components/Filters';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Account from './components/Account';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
//https://github.com/LogRocket/redux-logger
import effect from './effects/effects';
import { ACCOUNT_LOGIN_ACTION_TYPE } from './actions/types'

const logger = createLogger({
});

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger,sagaMiddleware]

const store = createStore(RootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(effect)

class App extends React.Component {

  componentDidMount() {
    //this.subscription = store.subscribe(()=>{console.log(store.getState())})
  }

  componentWillUnmount() {
	//this.subscription()
  }

	render() {
		return (
	  //为什么我要把store定义在这里？ 因为它是唯一的，而且必须使用react-redux提供的Provider组件包裹入口的其他组件才能使redux中的store生效。
			<Provider store={store}>
				<SafeAreaView style={styles.container}>
					<StatusBar style="auto" />
					<Filters />
					<AddTodo />
					<TodoList/>
					<Account/>
				</SafeAreaView>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center'
	}
});

export default App;


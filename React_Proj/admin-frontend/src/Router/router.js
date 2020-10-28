import React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import App from '../App';

import Admin from '../screens/Admin/index'
import Login from '../screens/Login/index'
import Detail from '../screens/Detail/index'


export default class Router extends React.Component {
	render() {
		return <HashRouter >
            <App>
            <Route path='/login' component={Login}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/order/detail' component={Detail}/>
            </App>
        </HashRouter>
	}
}

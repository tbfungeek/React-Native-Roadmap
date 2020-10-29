import React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import App from '../App';

import Admin from '../screens/Admin/index';
import Login from '../screens/Login/index';
import Detail from '../screens/Detail/index';
import Home from '../screens/Admin/Home/index';

import Buttons from '../screens/Admin/UI/buttons';
import Modals from '../screens/Admin/UI/modals';
import Loadings from '../screens/Admin/UI/loadings';
import NotMatch from '../screens/Admin/noMatch/index';

export default class Router extends React.Component {
	render() {
		return (
			<HashRouter>
				<App>
					<Route path="/login" component={Login} />
					<Route
						path="/admin"
						render={() => (
							<Admin>
								<Switch>
                                    <Route exact={true} path="/admin" component={Home} />
                                    <Route path="/admin/home" component={Home} />
									<Route path="/admin/ui/buttons" component={Buttons} />
									<Route path="/admin/ui/modals" component={Modals} />
									<Route path="/admin/ui/loadings" component={Loadings} />
									<Route component={NotMatch} />
								</Switch>
							</Admin>
						)}
					/>
					<Route path="/order/detail" component={Detail} />
				</App>
			</HashRouter>
		);
	}
}

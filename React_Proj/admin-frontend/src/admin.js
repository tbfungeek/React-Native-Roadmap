import React from 'react';
import { Col, Row } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './Admin.less';
import Home from './screens/Home';
export default class Admin extends React.Component {
	render() {
		return (
			<Row className="Container">
				<Col span={5} className="NavLeft-container">
					<NavLeft className="NavLeft" />
				</Col>
				<Col span={19} className="Content-container">
					<Header className="header" />
					<Row className="Content">
						<Home />
					</Row>
					<Footer className="footer" />
				</Col>
			</Row>
		);
	}
}

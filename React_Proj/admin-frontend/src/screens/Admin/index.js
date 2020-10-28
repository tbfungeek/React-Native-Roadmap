import React from 'react';
import { Col, Row } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavLeft from '../../components/NavLeft';
import './index.less';

export default class Admin extends React.Component {
	render() {
		return (
			<Row className="Container">
				<Col span={5} className="NavLeft-container">
					<NavLeft className="NavLeft" />
				</Col>
				<Col span={19} className="Content-container">
					<Header className="header" />
					<Row className="Content">{this.props.children}</Row>
					<Footer className="footer" />
				</Col>
			</Row>
		);
	}
}

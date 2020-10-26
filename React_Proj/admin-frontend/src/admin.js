import React from 'react';
import {Col, Row} from 'antd'; 
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './Admin.less'

export default class Admin extends React.Component {
	render() {
		return (
            <Row className="Container">
                <Col span={4} className="NavLeft-container">
                    <NavLeft className="NavLeft"/>
                </Col>
                <Col span={20} className="Content-container">
                    <Header className="header"/>
                    <Row className="Content">Content</Row>
                    <Footer className="footer"/>
                </Col>
            </Row>
        );
	}
}

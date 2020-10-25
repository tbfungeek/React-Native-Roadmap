import React from 'react';
import {Col, Row} from 'antd'; 
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';


export default class Admin extends React.Component {
	render() {
		return (
            <Row >
                <Col span={3}>Col1</Col>
                <Col span={21}>
                    <Header/>
                    <Row>Content</Row>
                    <Footer/>
                </Col>
            </Row>
        );
	}
}

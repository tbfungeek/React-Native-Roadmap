import React from 'react';
import {Col, Row} from 'antd'; 
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './common.less'

export default class Admin extends React.Component {
	render() {
		return (
            <Row className={container}>
                <Col span={4} className={navLeftContainer}>
                    <NavLeft className={navLeft}/>
                </Col>
                <Col span={20} className={contentContainer}>
                    <Header className={header}/>
                    <Row className={content}>Content</Row>
                    <Footer className={footer}/>
                </Col>
            </Row>
        );
	}
}

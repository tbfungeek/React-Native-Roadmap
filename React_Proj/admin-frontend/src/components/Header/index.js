import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import { formatDate } from '../../utils/utils';

export default class Header extends React.Component {
	state = {
		systemTime: ''
	};
	componentWillMount() {
		setInterval(() => {
			let systemTime = formatDate(new Date().getTime());
			this.setState({
				systemTime
			});
		}, 1000);
    }
    
    getWeatherAPIData() {

    }

	render() {
		return (
			<div className="header">
				<Row className="header-top-container">
					<Col span={24} className="header-top">
						<span>欢迎您，tbfungeek</span>
						<a href="#">退出</a>
					</Col>
				</Row>
				<Row className="breadcrumbs">
					<Col span={4} className="breadcrumbs-title">
						<span>首页</span>
					</Col>
					<Col span={20} className="breadcrumbs-weather">
						<span>今天:{this.state.systemTime ? this.state.systemTime : ''}</span>
					</Col>
				</Row>
			</div>
		);
	}
}

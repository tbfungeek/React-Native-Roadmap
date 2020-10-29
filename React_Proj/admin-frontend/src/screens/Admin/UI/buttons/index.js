import React from 'react';

import { Card, Button } from 'antd';

import './index.less'

export default class Buttons extends React.Component {
	render() {
		return (
			<div className="containner">
				<Card title="基础按钮">
					<Button type="primary">主按钮</Button>
					<Button>次按钮</Button>
					<Button type="dashed">虚线按钮</Button>
					<Button type="text">文本按钮</Button>
					<Button type="link">链接按钮</Button>
				</Card>
			</div>
		);
	}
}

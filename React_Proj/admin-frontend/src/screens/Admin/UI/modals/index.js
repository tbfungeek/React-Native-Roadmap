import React from 'react';
import { Button, Card, Modal } from 'antd';

export default class Modals extends React.Component {
	handleClick = (type) => {
		Modal[type]({
			title: '信息弹窗'
		});
	};

	state = {
		visible: false
	};

	render() {
		return (
			<div>
				<Card title="基础弹窗">
					<Button
						onClick={() => {
							this.setState({ visible: true });
						}}
					>
						Open
					</Button>
				</Card>

				<Card title="信息确认弹窗">
					<Button type="primary" onClick={() => this.handleClick('confirm')}>
						Confirm
					</Button>
					<Button type="primary" onClick={() => this.handleClick('info')}>
						Info
					</Button>
					<Button type="primary" onClick={() => this.handleClick('success')}>
						Success
					</Button>
					<Button type="primary" onClick={() => this.handleClick('error')}>
						Error
					</Button>
					<Button type="primary" onClick={() => this.handleClick('warning')}>
						Warning
					</Button>
				</Card>

				<Modal
					title="这是一个基础弹窗"
					visible={this.state.visible}
					onCancel={() => this.setState({ visible: false })}
					onOk={() => this.setState({ visible: false })}
				/>
			</div>
		);
	}
}

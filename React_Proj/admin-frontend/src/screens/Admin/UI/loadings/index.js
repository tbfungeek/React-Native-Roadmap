import React from 'react';
import { Card, Button, Spin, Alert } from 'antd';
import { LoadingOutlined, Loading3QuartersOutlined } from '@ant-design/icons';

export default class Loadings extends React.Component {
	render() {
		return (
			<div>
				<Card title="加载基本用法">
					<Spin style={{ marginLeft: 30 }} size="small" />
					<Spin style={{ margin: '0px 30px' }} />
					<Spin style={{ marginRight: 30 }} size="large" />

					<Spin style={{ margin: '0px 30px' }} size="large" delay={5000} />
					<Spin style={{ margin: '0px 30px' }} size="large" tip="正在加载中......" />
					<Spin
						style={{ margin: '0px 30px' }}
						size="large"
						tip="正在加载中......"
						indicator={<LoadingOutlined />}
					/>
				</Card>

				<Spin>
					<Alert
						message="Alert message title"
						description="Further details about the context of this alert."
						type="info"
					/>
				</Spin>
			</div>
		);
	}
}

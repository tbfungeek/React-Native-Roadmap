import React from 'react';

import { Card, Button, Radio } from 'antd';
import {
	PlusOutlined,
	EditOutlined,
	DeleteOutlined,
	SearchOutlined,
	DownloadOutlined,
	StepBackwardOutlined,
	StepForwardOutlined
} from '@ant-design/icons';

import './index.less';

export default class Buttons extends React.Component {
	state = {
		loading: false,
		size: 'default'
	};

	handleSizeChange = (e) => {
		this.setState({
			size: e.target.value
		});
	};

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

				<Card title="图形按钮">
					<Button icon={<PlusOutlined />}>创建</Button>
					<Button icon={<EditOutlined />}>编辑</Button>
					<Button icon={<DeleteOutlined />}>删除</Button>
					<Button shape="circle" icon={<SearchOutlined />} />
					<Button type="primary" icon={<SearchOutlined />}>
						搜索
					</Button>
					<Button type="primary" icon={<DownloadOutlined />}>
						下载
					</Button>
				</Card>

				<Card title="Loading按钮">
					<Button type="primary" loading={this.state.loading}>
						确定
					</Button>
					<Button type="primary" shape="circle" loading={this.state.loading} />
					<Button loading={this.state.loading}>点击加载</Button>
					<Button shape="circle" loading={this.state.loading} />
					<Button
						type="primary"
						onClick={() => {
							this.setState({ loading: !this.state.loading });
						}}
					>
						关闭
					</Button>
				</Card>

				<Card title="按钮组">
					<Button.Group>
						<Button type="primary" icon={<StepBackwardOutlined />} style={{ marginRight: 0 }}>
							确定
						</Button>
						<Button type="primary" icon={<StepForwardOutlined />}>
							取消
						</Button>
					</Button.Group>
				</Card>

				<Card title="按钮尺寸">
					<Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
						<Radio value="small">小</Radio>
						<Radio value="default">中</Radio>
						<Radio value="large">大</Radio>
					</Radio.Group>
					<Button type="primary" size={this.state.size}>
						主按钮
					</Button>
					<Button size={this.state.size}>次按钮</Button>
					<Button type="dashed" size={this.state.size}>
						虚线按钮
					</Button>
					<Button type="text" size={this.state.size}>
						文本按钮
					</Button>
					<Button type="link" size={this.state.size}>
						链接按钮
					</Button>
				</Card>
			</div>
		);
	}
}

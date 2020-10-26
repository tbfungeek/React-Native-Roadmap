import React from 'react';
import { Menu } from 'antd';
import './index.less';
import MenuConfig from '../../configs/menuConfigs';

const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
	renderMenu = (data) => {
		return data.map((item) => {
			if (item.children) {
				return (
					<SubMenu key={item.key} title={item.title}>
						{this.renderMenu(item.children)}
					</SubMenu>
				);
			}
			return <Menu.Item key={item.key} title={item.title}>{item.title}</Menu.Item>;
		});
	};

	componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
	}
	render() {
		return (
			<div>
				<div className="logo">
					<img src="/assets/logo-ant.svg" alt="" />
					<h1>CMS</h1>
				</div>
                <Menu mode="vertical" theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
			</div>
		);
	}
}

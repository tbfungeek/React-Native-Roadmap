import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link } from 'umi';

export default class componentName extends Component {
  render() {
    return (
      <div>
        <List>
          <List.Item>
            <Link to="/hook/useState/">UseState 例子</Link>
          </List.Item>

           <List.Item>
            <Link to="/hook/useEffect/">UseEffect 例子</Link>
          </List.Item>
        </List>
      </div>
    );
  }
}

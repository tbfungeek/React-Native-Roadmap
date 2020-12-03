import React, { Component } from 'react';
import { List } from 'antd-mobile';
import SearchContext from './searchContext';

export default class Lists extends Component {

  static contextType = SearchContext;

  render() {
    const {lists} = this.context.state;
    return (
      <div>
        <List>
          {lists.map((item,key)=> (
            <List.Item key={key}>{item}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

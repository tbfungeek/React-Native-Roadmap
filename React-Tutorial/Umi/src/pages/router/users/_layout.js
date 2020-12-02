import React, { Component } from 'react';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>总布局头部</h1>
        <div>{this.props.children}</div>
        <footer>总布局尾部</footer>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { connect } from 'dva';

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lists = this.props.lists;
    return (
      <div>
        <List>
          {lists.map((item, key) => (
            <List.Item key={key}>{item}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { lists } = state.search;
  return {
    lists,
  };
};

export default connect(mapStateToProps)(Lists);

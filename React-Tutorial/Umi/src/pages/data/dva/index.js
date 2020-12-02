import React, { Component } from 'react';
import Search from '@/pages/data/dva/search';
import List from '@/pages/data/dva/list';
import { connect } from 'dva';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const text = this.props.text;
    return (
      <div>
        <h1>{text}</h1>
        <Search />
        <List />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { text } = state.search;
  return {
    text,
  };
};

export default connect(mapStateToProps)(Index);

import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import { connect } from 'dva';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = value => {
    this.setState({ value });
  };

  handleSubmit = () => {
    this.props.dispatch({
      type: 'search/getSearchResult',
      payload: this.state.value,
    });
  };

  render() {
    return (
      <div>
        <SearchBar onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { dispatch } = state;
  return { dispatch };
};

export default connect(mapStateToProps)(Search);

import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import SearchContext from './searchContext';

export default class Search extends Component {
  static contextType = SearchContext;

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
    this.context.dispatch({
      type: 'LIST',
      payload: this.state.value,
    });
  };

  render() {
    return <SearchBar onChange={this.handleChange} onSubmit={this.handleSubmit} />;
  }
}

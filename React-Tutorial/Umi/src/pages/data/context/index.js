import React, { Component } from 'react';
import Search from './search';
import Lists from './list';
import SearchContext from './searchContext';
import {getAsyncSearchResult} from '@/services/search';

export default class SearchIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      lists: [],
    };
  }

  handleDispatch = async (action) => {
    switch(action.type) {
      case 'LIST': {

        const res = await getAsyncSearchResult(action.payload);
        return this.setState({
          lists: res.lists
        });
      }
      case 'TEXT': {
        return this.setState({
          text:action.payload
        })
      }
      default: return;
    }
  }

  render() {
    return (
      <SearchContext.Provider
        value={{
          state: this.state,
          dispatch: this.handleDispatch
        }}
      >
        <Search />
        <Lists />
      </SearchContext.Provider>
    );
  }
}

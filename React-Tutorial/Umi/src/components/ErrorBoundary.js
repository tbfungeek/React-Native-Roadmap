import React, { Component } from 'react';

export default class ErrorBoundaryComponenet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    return (
      <div>{this.state.hasError ? <h1>Oops ~ 出现错误，请稍后再试</h1> : this.props.children}</div>
    );
  }
}

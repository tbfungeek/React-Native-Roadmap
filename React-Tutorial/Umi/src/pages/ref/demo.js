import React, { Component } from 'react';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Text Before Change!',
    };
  }

  handleChange = () => {
    this.setState({
      text: 'Text After Change!',
    });
  };

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

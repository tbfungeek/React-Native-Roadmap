import React, { Component } from 'react';
import Model from '../../components/Modal'

export default class CreatePortal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status : false
    }
  }

  handleClick = ()=> {
    this.setState({
      status : true
    })
  }

  handleClose = () => {
    this.setState({
      status : false
    })
  }

  render() {
    return (
      <>
        <Model show={this.state.status} onClose={this.handleClose}/>
        <button onClick={this.handleClick}>点击</button>
      </>
    )
  }
}

import React, { Component } from 'react';
import Demo from './demo';
import InputComponent from './Input'

export default class RefComponent extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
    this.inputRef = React.createRef();
    this.demoRef = React.createRef();
    this.inputRef2 = React.createRef();
  }

  componentDidMount() {
    console.log(this.divRef.current);

    this.inputRef.current.focus();

    setTimeout(() => {
      alert(this.inputRef2.current.value)
    }, 5000);

  }

  handleChange = () => {
    console.log(this.inputRef.current.value)
  }

  render() {
    return (
      <div ref={this.divRef}>
        <input ref={this.inputRef} onChange={() => this.handleChange()} />
        <button  onClick={()=>{
          this.demoRef.current.handleChange()
        }}> 通过Ref调用组件内部方法</button>
        <Demo ref={this.demoRef}/>
        <InputComponent ref={this.inputRef2}/>
      </div>
    );
  }
}

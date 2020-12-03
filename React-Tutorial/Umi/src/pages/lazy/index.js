import React, { Component } from 'react';
import LazyLoad from '@/components/Lazy/'

export default class Lazy extends Component {

  render() {
    return (
      <div>
        <LazyLoad component={import("./demo.js")} delay={5000}/>
      </div>
    )
  }
}

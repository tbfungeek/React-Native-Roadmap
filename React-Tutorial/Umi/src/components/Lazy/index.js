import React, { Component, lazy, Suspense } from 'react';

export default class Lazy extends Component {
  _renderLazy = () => {
    let Lazy = null;
    const { component, delay, ...others } = this.props;
    if (!component || component.constructor.name !== 'Promise') {
      Lazy = lazy(() => import('./error'));
    } else {
      Lazy = lazy(() => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(component);
          }, delay || 300);
        });
      });
    }

    return <Lazy {...others} />;
  };

  render() {
    return <Suspense fallback={<div>loading......</div>}>{this._renderLazy()}</Suspense>;
  }
}

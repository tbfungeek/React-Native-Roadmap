import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

class Progress extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <AnimatedCircularProgress
        size={40}
        width={2}
        tintColor="#f86442"
        backgroundColor="#ededed"
        fill={60}>
        {() => <>{children}</>}
      </AnimatedCircularProgress>
    );
  }
}

export default Progress;

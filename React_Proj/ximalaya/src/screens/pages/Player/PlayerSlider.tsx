import React from 'react';
import {} from 'react-native';
import Slider from 'react-native-slider-x';

class PlayerSlider extends React.Component {
  render() {
    return (
      <Slider
        value={10}
        maximumValue={100}
        maximumTrackTintColor="rgba(255,255,255,0.3)"
        minimumTrackTintColor="white"
      />
    );
  }
}

export default PlayerSlider;

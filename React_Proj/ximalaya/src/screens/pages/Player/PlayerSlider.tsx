import React from 'react';
import {} from 'react-native';
import Slider from 'react-native-slider-x';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import {type} from '../../../assets/iconfont/index';

const mapStateToProps = ({player}: RootState) => {
  return {
    currentTime: player.currentTime,
    duration: player.duration,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {}

class PlayerSlider extends React.Component<IProps> {
  render() {
    const {currentTime, duration} = this.props;
    return (
      <Slider
        value={currentTime}
        maximumValue={duration}
        maximumTrackTintColor="rgba(255,255,255,0.3)"
        minimumTrackTintColor="white"
      />
    );
  }
}

export default connector(PlayerSlider);

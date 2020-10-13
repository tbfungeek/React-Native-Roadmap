import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Slider from 'react-native-slider-x';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import {getTimeString} from '../../../utils/utils';

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
      <View style={styles.container}>
        <Slider
          value={currentTime}
          maximumValue={duration}
          maximumTrackTintColor="rgba(255,255,255,0.3)"
          minimumTrackTintColor="white"
          renderThumb={this.renderThumb}
          thumbStyle={styles.thumber}
        />
      </View>
    );
  }

  renderThumb = () => {
    const {currentTime, duration} = this.props;
    return (
      <View>
        <Text style={styles.text}>
          {getTimeString(currentTime)}/{getTimeString(duration)}
        </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  thumber: {
    width: 86,
    backgroundColor: '#fff',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export default connector(PlayerSlider);

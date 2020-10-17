import React from 'react';
import {StyleSheet, Animated, Image, Easing} from 'react-native';
import Icon from '@/assets/iconfont';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import Touchable from './Touchable';
import Progress from './Progress';

const mapStateToProps = ({player}: RootState) => {
  return {
    thumbnailUrl: player.player.thumbnailUrl,
    playState: player.playState,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {}

class Play extends React.Component<IProps> {
  animate = new Animated.Value(0);

  rotate: Animated.AnimatedInterpolation;
  timing: Animated.CompositeAnimation;

  constructor(props: IProps) {
    super(props);
    this.timing = Animated.loop(
      Animated.timing(this.animate, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      {iterations: -1},
    );

    this.rotate = this.animate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  }

  componentDidMount() {
    const {playState} = this.props;
    if (playState === 'playing') {
      this.timing.start();
    }
  }

  componentDidUpdate() {
    const {playState} = this.props;
    if (playState === 'playing') {
      this.timing.start();
    } else if (playState === 'paused') {
      this.timing.stop();
    }
  }

  render() {
    const {thumbnailUrl} = this.props;
    return (
      <Touchable style={styles.player}>
        <Progress>
          <Animated.View style={{transform: [{rotate: this.rotate}]}}>
            {thumbnailUrl ? (
              <Image source={{uri: thumbnailUrl}} style={styles.playImage} />
            ) : (
              <Icon name="iconplay1" size={40} color={'#424242'} />
            )}
          </Animated.View>
        </Progress>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  player: {
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  playImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
});

export default connector(Play);

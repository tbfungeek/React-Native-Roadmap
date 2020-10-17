import React from 'react';
import Play from '@/components/Common/Play';
import {View, StyleSheet, Platform} from 'react-native';
import {screenWidth} from '@/utils/DimensionsUtils';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({player}: RootState) => {
  return {
    playerState: player.playState,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  routeName: string;
}

class PlayView extends React.Component<IProps> {
  render() {
    const {routeName, playerState} = this.props;
    if (
      routeName === 'Root' ||
      routeName === 'PlayerScreen' ||
      playerState === 'pause'
    ) {
      return null;
    }
    return (
      <View style={styles.container}>
        <Play />
      </View>
    );
  }
}

const WIDTH = 50;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: WIDTH,
    height: WIDTH + 10,
    bottom: 0,
    paddingTop: (50 - 42) / 2,
    borderTopLeftRadius: WIDTH / 2,
    borderTopRightRadius: WIDTH / 2,
    left: (screenWidth - WIDTH) / 2,
    backgroundColor: 'rgba(255,255,255,0.8)',
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOpacity: 0.85,
        shadowRadius: 5,
        shadowOffset: {
          width: StyleSheet.hairlineWidth,
          height: StyleSheet.hairlineWidth,
        },
      },
    }),
  },
});

export default connector(PlayView);

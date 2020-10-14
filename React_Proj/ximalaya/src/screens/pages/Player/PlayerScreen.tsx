import React from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import Icon from '@/assets/iconfont';
import Touchable from '@/components/Common/Touchable';
import PlayerSlider from '@/screens/pages/Player/PlayerSlider';
import {screenWidth} from '@/utils/DimensionsUtils';
import {
  ModelStackNavigation,
  PlayScreenRouteProp,
} from '@/navigators/StackNavigator';
import LinearGradient from 'react-native-linear-gradient';

const mapStateToProps = ({player}: RootState) => {
  return {
    player: player.player,
    playStatus: player.playState,
    currentIndex: player.currentIndex,
    prevIndex: player.prevIndex,
    nextIndex: player.nextIndex,
    playlist: player.playlist,
    thumbnailUrl: player.player.thumbnailUrl,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  headerHeight: number;
  navigation: ModelStackNavigation;
  route: PlayScreenRouteProp;
}

interface IState {
  barrage: Boolean;
}

const IMAGE_SIZE = 180;
const IMAGE_PADDING_TOP = (screenWidth - IMAGE_SIZE) / 2;

const animate = new Animated.Value(1);

class PlayerScreen extends React.Component<IProps, IState> {
  state = {
    barrage: false,
  };

  componentDidMount() {
    const {dispatch, route, player, navigation} = this.props;
    const {id} = route.params;
    dispatch({
      type: 'player/fetchPlayerInfo',
      payload: {
        id,
      },
    });

    navigation.setOptions({
      headerTitle: player.title,
    });
  }

  componentDidUpdate() {
    const {player, navigation} = this.props;
    navigation.setOptions({
      headerTitle: player.title,
    });
  }

  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'player/stop',
    });
  }

  prev = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'player/previous',
    });
  };

  next = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'player/next',
    });
  };

  render() {
    const {currentIndex, playlist, thumbnailUrl} = this.props;
    const {barrage} = this.state;
    const playerHeaderStyle = {
      paddingTop: IMAGE_PADDING_TOP,
    };
    const prevDisable = currentIndex === 0;
    const nextDisable = currentIndex === playlist.length - 1;
    return (
      <View style={playerHeaderStyle}>
        <View style={styles.thumbnailContainer}>
          <Animated.Image
            source={{uri: thumbnailUrl}}
            style={[styles.thumbnailStyle, {transform: [{scale: animate}]}]}
          />
        </View>
        {barrage && (
          <LinearGradient
            style={styles.linearGradient}
            colors={['rgba(128,104,102,0.5)', '#807c66']}
          />
        )}
        <Touchable onPress={this.barrageBtnClick} style={styles.barrage}>
          <Text style={styles.barrageText}>弹幕</Text>
        </Touchable>
        <PlayerSlider />
        <View style={styles.playButtonsStyles}>
          <Touchable onPress={this.prev} disabled={prevDisable}>
            <Icon name="iconprev" color={'white'} size={26} />
          </Touchable>
          {this.playButton()}
          <Touchable onPress={this.next} disabled={nextDisable}>
            <Icon name="iconkaishi" color={'white'} size={26} />
          </Touchable>
        </View>
      </View>
    );
  }

  barrageBtnClick = () => {
    this.setState({
      barrage: !this.state.barrage,
    });

    Animated.timing(animate, {
      toValue: this.state.barrage ? 1 : screenWidth / IMAGE_SIZE,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  playButton = () => {
    const {playStatus} = this.props;
    return (
      <Touchable onPress={this.togglePlayer}>
        <Icon
          name={playStatus === 'playing' ? 'iconpause' : 'iconplay'}
          color={'white'}
          size={26}
        />
      </Touchable>
    );
  };

  togglePlayer = () => {
    const {dispatch, playStatus} = this.props;
    dispatch({
      type: playStatus === 'playing' ? 'player/pause' : 'player/play',
    });
  };
}

const styles = StyleSheet.create({
  playButtonsStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginHorizontal: 50,
  },
  thumbnailStyle: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 8,
    borderWidth: 1,
  },
  thumbnailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  barrage: {
    width: 50,
    height: 20,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  barrageText: {
    color: 'white',
    fontSize: 12,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    height: screenWidth,
    width: screenWidth,
  },
});

export default connector(PlayerScreen);

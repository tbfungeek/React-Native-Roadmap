import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import Icon from '@/assets/iconfont';
import {useHeaderHeight} from '@react-navigation/stack';
import Touchable from '@/components/Common/Touchable';
import PlayerSlider from '@/screens/pages/Player/PlayerSlider';
import {
  ModelStackNavigation,
  PlayScreenRouteProp,
} from '@/navigators/StackNavigator';

const mapStateToProps = ({player}: RootState) => {
  return {
    player: player.player,
    playStatus: player.playState,
    currentIndex: player.currentIndex,
    prevIndex: player.prevIndex,
    nextIndex: player.nextIndex,
    playlist: player.playlist,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  headerHeight: number;
  navigation: ModelStackNavigation;
  route: PlayScreenRouteProp;
}

class PlayerScreen extends React.Component<IProps> {
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
    const {headerHeight, currentIndex, playlist} = this.props;
    const playerHeaderStyle = {
      paddingTop: headerHeight,
    };
    const prevDisable = currentIndex === 0;
    const nextDisable = currentIndex === playlist.length - 1;
    return (
      <View style={playerHeaderStyle}>
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
});

function Wrapper(props: IProps) {
  const headerHeight = useHeaderHeight();
  return <PlayerScreen {...props} headerHeight={headerHeight} />;
}

export default connector(Wrapper);

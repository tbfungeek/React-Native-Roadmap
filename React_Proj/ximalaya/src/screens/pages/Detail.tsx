import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import Icon from '@/assets/iconfont';
import {useHeaderHeight} from '@react-navigation/stack';
import Touchable from '@/components/Common/Touchable';

const mapStateToProps = ({player}: RootState) => {
  return {
    player: player.player,
    playStatus: player.playState,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  headerHeight: number;
}

class Detail extends React.Component<IProps> {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'player/fetchPlayerInfo',
    });
  }
  render() {
    const {headerHeight,player, playStatus} = this.props;
    const playerHeaderStyle = {
      paddingTop: headerHeight,
    };
    return <View style={playerHeaderStyle}>{this.playButton()}</View>;
  }

  playButton = () => {
    const {playStatus} = this.props;
    return (
      <Touchable onPress={this.togglePlayer}>
        <Icon name={playStatus === 'playing' ? 'iconpause' : 'iconplay'} />
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

function Wrapper(props: IProps) {
  const headerHeight = useHeaderHeight();
  return <Detail {...props} headerHeight={headerHeight} />;
}

export default connector(Wrapper);

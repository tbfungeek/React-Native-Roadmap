import React from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Found} from '../../../model/found';
import VideoPlayer from 'react-native-video-custom-controls';

const connector = connect();

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {}

interface IState {
  data: Found[];
  currentId: string;
}

class FoundScreen extends React.Component<IProps, IState> {
  state = {
    data: [],
    currentId: '',
  };

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'found/fetchFoundList',
      callback: this.onFetchedFoundList,
    });
  }

  onFetchedFoundList = (data: Found[]) => {
    this.setState({
      data,
    });
  };

  onPlay = (id: string) => {
    this.setState({
      currentId: id,
    });
    const {dispatch} = this.props;
    dispatch({
      type: 'player/pause',
    });
  };

  onPause = () => {
    this.setState({
      currentId: '',
    });
  };

  renderItem = ({item}: ListRenderItemInfo<Found>) => {
    const {currentId} = this.state;
    return (
      <View>
        <VideoPlayer
          source={{uri: 'https://www.runoob.com/try/demo_source/mov_bbb.mp4'}}
          onPlay={() => {
            this.onPlay(item.id);
          }}
          onPause={() => {
            this.onPause();
          }}
          paused={currentId !== item.id}
          style={styles.video}
        />
      </View>
    );
  };
  render() {
    const {data} = this.state;
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        extraData={this.state.currentId}
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    marginVertical: 1,
    height: 220,
  },
});

export default connector(FoundScreen);

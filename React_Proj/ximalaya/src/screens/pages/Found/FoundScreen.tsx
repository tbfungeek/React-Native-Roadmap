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
}

class FoundScreen extends React.Component<IProps, IState> {
  state = {
    data: [],
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

  renderItem = ({item}: ListRenderItemInfo<Found>) => {
    return (
      <View>
        <Text>{item.videoUrl}</Text>
        <VideoPlayer
          source={{uri: 'https://www.runoob.com/try/demo_source/mov_bbb.mp4'}}
          paused
          style={styles.video}
        />
      </View>
    );
  };
  render() {
    const {data} = this.state;
    return <FlatList data={data} renderItem={this.renderItem} />;
  }
}

const styles = StyleSheet.create({
  video: {
    height: 220,
  },
});

export default connector(FoundScreen);

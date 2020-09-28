import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/model/index';
import {IChannel} from '../../model/home';
import Icon from '@/assets/iconfont';
import Touchable from '@/components/Common/Touchable';

interface IProps {
  data: IChannel;
  onItemPress: (data: IChannel) => void;
}

class ChannelInfoCell extends React.PureComponent<IProps> {
  onPress = () => {
    const {data, onItemPress} = this.props;
    onItemPress(data);
  };

  render() {
    const {data} = this.props;
    return (
      <Touchable style={styles.container} onPress={this.onPress}>
        <View style={styles.cellType}>
          <Image source={{uri: data.image}} style={styles.imageStyle} />
          <View style={styles.infoType}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.remark}>{data.remark}</Text>
            <View style={styles.playInfo}>
              <View style={styles.playingInfo}>
                <Icon name="icontingdan" color={'#e94922'} size={14} />
                <Text style={styles.playingText}>{data.played}</Text>
              </View>
              <View style={styles.playedInfo}>
                <Icon name="iconshengyin" color={'#e94922'} size={14} />
                <Text style={styles.playedText}>{data.playing}</Text>
              </View>
            </View>
          </View>
        </View>
      </Touchable>
    );
  }
}

const mapStateToProps = ({home, loading}: RootState) => {
  return {
    channelList: home.channelList,
    loading: loading.effects['home/fetchChannelList'],
    hasMore: home.pageInfo.hasMore,
  };
};

const Connecter = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof Connecter>;

interface IChannelListProps extends ModelState {
  listHeader: React.ReactElement;
}

class ChannelList extends React.Component<IChannelListProps> {
  state = {
    refreshing: false,
  };

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchChannelList',
    });
  }

  keyExtractor = (item: IChannel) => item.id;
  render() {
    const {channelList, listHeader} = this.props;
    const {refreshing} = this.state;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        ListHeaderComponent={listHeader}
        ListFooterComponent={this.listFooter}
        ListEmptyComponent={this.empty}
        data={channelList}
        renderItem={this.renderItem}
        onRefresh={this.onRefresh}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.2}
        refreshing={refreshing}
      />
    );
  }

  get listFooter() {
    const {hasMore, loading, channelList} = this.props;
    if (!hasMore) {
      return (
        <View style={styles.end}>
          <Text>----我是有底线的----</Text>
        </View>
      );
    }

    if (loading && hasMore && channelList.length > 0) {
      return (
        <View style={styles.loading}>
          <Text>正在加载中.......</Text>
        </View>
      );
    }
  }

  get empty() {
    return (
      <View style={styles.empty}>
        <Text>暂无数据</Text>
      </View>
    );
  }

  //ListRenderItemInfo
  renderItem = ({item}: {item: IChannel}) => {
    return <ChannelInfoCell data={item} onItemPress={this.onItemPress} />;
  };

  onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchChannelList',
      callback: () => {
        this.setState({
          refreshing: false,
        });
      },
    });
  };

  onEndReached = () => {
    const {dispatch, loading, hasMore} = this.props;
    if (loading || !hasMore) {
      return;
    }
    dispatch({
      type: 'home/fetchChannelList',
      payload: {
        loadMore: true,
      },
    });
  };

  onItemPress = (data: IChannel) => {
    console.log(data);
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 2,
  },
  cellType: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  imageStyle: {
    borderRadius: 8,
    width: 90,
    height: 90,
    marginRight: 10,
  },
  infoType: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 8,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    color: '#333',
  },
  remark: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  playInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playedInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playingText: {
    color: '#e94922',
    fontSize: 10,
    marginLeft: 5,
  },
  playedText: {
    color: '#e94922',
    fontSize: 10,
    marginLeft: 5,
  },

  end: {
    alignItems: 'center',
  },

  loading: {
    alignItems: 'center',
  },

  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 140,
  },
});

export default Connecter(ChannelList);

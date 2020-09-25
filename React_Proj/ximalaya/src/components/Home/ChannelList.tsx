import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/model/index';
import {IChannel} from '../../model/home';
import Icon from '@/assets/iconfont';

interface IProps {
  data: IChannel;
}

class ChannelInfoCell extends React.Component<IProps> {
  render() {
    const {data} = this.props;
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const mapStateToProps = ({home}: RootState) => {
  return {
    channelList: home.channelList,
  };
};

const Connecter = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof Connecter>;

interface IChannelListProps extends ModelState {
  listHeader: React.ReactElement;
}

class ChannelList extends React.Component<IChannelListProps> {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchChannelList',
    });
  }
  render() {
    const {channelList, listHeader} = this.props;
    return (
      <FlatList
        ListHeaderComponent={listHeader}
        data={channelList}
        renderItem={this.renderItem}
      />
    );
  }
  //ListRenderItemInfo
  renderItem = ({item}: {item: IChannel}) => {
    return <ChannelInfoCell data={item} />;
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
});

export default Connecter(ChannelList);

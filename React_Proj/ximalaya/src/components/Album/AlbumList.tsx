import React from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Alert,
} from 'react-native';
import {RootState} from '@/model/index';
import {ConnectedProps, connect} from 'react-redux';
import {IProgram} from '@/model/album';
import Icon from '@/assets/iconfont';
import Touchable from '@/components/Common/Touchable';

interface IAlbumItemCellProps {
  item: IProgram;
  index: number;
  onPress: (item: IProgram) => void;
}
class AlbumItemCell extends React.Component<IAlbumItemCellProps> {
  onPress = () => {
    const {item, onPress} = this.props;
    if (!onPress) {
      return;
    }
    onPress(item);
  };
  render() {
    const {item, index} = this.props;
    return (
      <Touchable style={cellStyles.container} onPress={this.onPress}>
        <Text style={cellStyles.indexStyle}>{index + 1}</Text>
        <View style={cellStyles.info}>
          <Text style={cellStyles.title}>{item.title}</Text>
          <View style={cellStyles.data}>
            <View style={cellStyles.subInfoCell}>
              <Icon name="iconerji" color={'#666666'} size={16} />
              <Text style={cellStyles.subInfoText}>{item.playVolume}</Text>
            </View>
            <View style={cellStyles.subInfoCell}>
              <Icon name="iconshengyin1" color={'#999999'} size={16} />
              <Text style={cellStyles.subInfoText}>{item.duration}</Text>
            </View>
          </View>
        </View>
        <Text style={cellStyles.date}>{item.date}</Text>
      </Touchable>
    );
  }
}

const cellStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
  indexStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 25,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: '#333333',
  },
  data: {
    marginBottom: 2,
    marginTop: 10,
    flexDirection: 'row',
  },
  date: {
    fontSize: 12,
    color: '#666666',
    marginRight: 20,
  },
  subInfoText: {
    fontSize: 12,
    marginLeft: 4,
    color: '#666666',
  },
  subInfoCell: {
    flexDirection: 'row',
    marginRight: 15,
  },
});

const mapStateToProps = ({album}: RootState) => {
  return {
    albumList: album.list,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

class AlbumList extends React.Component<ModelState> {
  renderItem = ({item, index}: ListRenderItemInfo<IProgram>) => {
    return (
      <AlbumItemCell item={item} index={index} onPress={this.onItemPress} />
    );
  };
  render() {
    const {albumList} = this.props;
    return <FlatList data={albumList} renderItem={this.renderItem} />;
  }

  onItemPress = (item: IProgram) => {
    Alert.alert(item.title);
  };
}

export default connector(AlbumList);

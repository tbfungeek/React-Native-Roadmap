import React from 'react';
import {View, Text, FlatList, ListRenderItemInfo} from 'react-native';
import {RootState} from '@/model/index';
import {ConnectedProps, connect} from 'react-redux';
import {IProgram} from '@/model/album';

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
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };
  render() {
    const {albumList} = this.props;
    return <FlatList data={albumList} renderItem={this.renderItem} />;
  }
}

export default connector(AlbumList);

import React from 'react';
import {FlatList, ListRenderItemInfo, View, Text} from 'react-native';
import realm, {IProgram} from '../../model/storage/realm';

export default class Listen extends React.Component {
  renderItem = ({item}: ListRenderItemInfo<IProgram>) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };
  render() {
    const programs = realm.objects<IProgram>('Program');
    return <FlatList data={programs} renderItem={this.renderItem} />;
  }
}

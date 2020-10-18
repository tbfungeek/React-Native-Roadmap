import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import realm, {IProgram} from '../../model/storage/realm';
import Icon from '@/assets/iconfont';
import {getTimeString} from '@/utils/utils';
import Touchable from '@/components/Common/Touchable';

export default class Listen extends React.Component {
  renderItem = ({item}: ListRenderItemInfo<IProgram>) => {
    return (
      <View style={styles.container}>
        <Image source={{uri: item.thumbnailUrl}} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <View style={styles.duration}>
            <Icon name="iconduration" size={10} />
            <Text style={styles.durationText}>
              {getTimeString(item.duration)}
            </Text>
          </View>
        </View>
        <Touchable
          style={styles.deleteButton}
          onPress={() => {
            this.onDeleteButton(item);
          }}>
          <Icon name="icontemplate_delete" size={16} />
        </Touchable>
      </View>
    );
  };
  render() {
    const programs = realm.objects<IProgram>('Program');
    return <FlatList data={programs} renderItem={this.renderItem} />;
  }

  onDeleteButton = (item: IProgram) => {
    realm.write(() => {
      const program = realm.objects('Program').filtered(`id='${item.id}'`);
      realm.delete(program);
      this.setState({});
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    marginHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 8,
    marginRight: 15,
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    marginLeft: 6,
    fontSize: 12,
    color: '#999',
  },
  titleStyle: {
    marginBottom: 20,
    color: '#333',
  },
  deleteButton: {
    padding: 10,
    justifyContent: 'center',
  },
});

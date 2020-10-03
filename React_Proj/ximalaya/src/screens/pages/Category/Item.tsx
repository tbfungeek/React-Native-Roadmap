import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenWidth} from '@/utils/DimensionsUtils';
import {ICategory} from '../../../model/category';

const itemWidth = (screenWidth - 10) / 4;

interface IProps {
  item: ICategory;
}

class Item extends React.Component<IProps> {
  render() {
    const {item} = this.props;
    return (
      <View key={item.id} style={styles.itemStyle}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    width: itemWidth,
    height: 46,
  },
  itemContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 1,
  },
  itemText: {
    color: '#666',
  },
});

export default Item;

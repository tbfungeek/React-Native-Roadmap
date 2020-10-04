import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenWidth} from '@/utils/DimensionsUtils';
import {ICategory} from '../../model/category';

const itemWidth = (screenWidth - 10) / 4;

interface IProps {
  item: ICategory;
  isEdit: boolean;
  isMyCategories: boolean;
}

class Item extends React.Component<IProps> {
  render() {
    const {item, isEdit, isMyCategories} = this.props;
    return (
      <View key={item.id} style={styles.itemStyle}>
        <View style={styles.itemContainer}>
          {isEdit && (
            <View style={styles.itemIndicator}>
              <Text style={styles.itemIndicatorText}>
                {isMyCategories ? '-' : '+'}
              </Text>
            </View>
          )}
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
  itemIndicator: {
    backgroundColor: '#F75959',
    width: 14,
    height: 14,
    borderRadius: 7,
    position: 'absolute',
    top: -5,
    right: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemIndicatorText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default Item;

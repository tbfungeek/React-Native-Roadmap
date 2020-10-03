import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import {ICategory} from '../../../model/category';
import {screenWidth} from '@/utils/DimensionsUtils';
import _ from 'lodash';

const itemWidth = (screenWidth - 10) / 4;

const mapStateToProps = ({category}: RootState) => {
  return {
    categories: category.categories,
    myCategories: category.myCategories,
  };
};
const Connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof Connector>;
interface IProps extends ModelState {}

interface IState {
  myCategories: ICategory[];
}

class Category extends React.Component<IProps, IState> {
  state = {
    myCategories: this.props.myCategories,
  };

  renderItem = (item: ICategory/*, index: number*/) => {
    return (
      <View key={item.id} style={styles.itemStyle}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      </View>
    );
  };
  render() {
    const {categories} = this.props;
    const {myCategories} = this.state;
    const classifyGroup = _.groupBy(categories, (item) => item.typeName);
    console.log('=============>', classifyGroup);
    return (
      <View style={styles.container}>
        <Text style={styles.classifyTitle}>我的分类</Text>
        <View style={styles.classifyView}>
          {myCategories.map(this.renderItem)}
        </View>
        <Text style={styles.classifyTitle}>所有分类</Text>
        <View style={styles.classifyView}>
          {categories.map(this.renderItem)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6f6',
  },
  classifyTitle: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 8,
    marginHorizontal: 10,
  },
  classifyView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 5,
  },
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

export default Connector(Category);

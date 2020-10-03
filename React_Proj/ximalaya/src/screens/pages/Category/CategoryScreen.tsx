import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import {ICategory} from '../../../model/category';

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

  renderItem = (item: ICategory, index: number) => {
    return (
      <View key={item.id}>
        <Text>{item.name}</Text>
      </View>
    );
  };
  render() {
    const {categories} = this.props;
    const {myCategories} = this.state;
    return (
      <View style={styles.container}>
        <Text>我的分类</Text>
        <View>{myCategories.map(this.renderItem)}</View>
        <Text>所有分类</Text>
        <View>{categories.map(this.renderItem)}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Connector(Category);

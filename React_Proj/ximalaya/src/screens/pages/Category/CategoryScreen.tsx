import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import {ICategory} from '../../../model/category';
import _ from 'lodash';
import {ScrollView} from 'react-native-gesture-handler';
import Item from '../../../components/Category/ItemCell';

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

  renderItem = (item: ICategory /*, index: number*/) => {
    return <Item key={item.id} item={item} />;
  };
  render() {
    const {categories} = this.props;
    const {myCategories} = this.state;
    const classifyGroup = _.groupBy(categories, (item) => item.typeName);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.classifyTitle}>我的分类</Text>
        <View style={styles.classifyView}>
          {myCategories.map(this.renderItem)}
        </View>

        <View>
          {Object.keys(classifyGroup).map((classify) => {
            return (
              <View key={classify}>
                <Text style={styles.classifyTitle}>{classify}</Text>
                <View style={styles.classifyView}>
                  {classifyGroup[classify].map(this.renderItem)}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
});

export default Connector(Category);

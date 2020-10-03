import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({category}: RootState) => {
  return {
    categories: category.categories,
    myCategories: category.myCategories,
  };
};

const Connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof Connector>;

interface IProps extends ModelState {}

class Category extends React.Component<IProps> {
  render() {
    const {category} = this.props;
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default Connector(Category);

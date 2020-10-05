import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import {ICategory} from '../../../model/category';
import _ from 'lodash';
import {ScrollView} from 'react-native-gesture-handler';
import Item, {
  itemHeight,
  itemWidth,
  parentWidth,
} from '../../../components/Category/ItemCell';
import {RootStackNavigation} from '@/navigators/StackNavigator';
import HeaderRightButton from '@/components/Category/HeaderRightButton';
import Touchable from '@/components/Common/Touchable';
import {DragSortableView} from 'react-native-drag-sort';

const mapStateToProps = ({category}: RootState) => {
  return {
    categories: category.categories,
    myCategories: category.myCategories,
    isEdit: category.isEdit,
  };
};
const Connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof Connector>;
interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

interface IState {
  myCategories: ICategory[];
  scrollEnabled: boolean;
}

const fixItemsIndex = [0, 1];

class Category extends React.Component<IProps, IState> {
  state = {
    scrollEnabled: true,
    myCategories: this.props.myCategories,
  };

  headerRight = () => {
    return <HeaderRightButton onSubmit={this.onSubmit} />;
  };

  onSubmit = () => {
    const {dispatch} = this.props;
    const {myCategories} = this.state;
    dispatch({
      type: 'category/toggle',
      payload: {
        myCategories,
      },
    });
  };

  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'category/setState',
      payload: {
        isEdit: false,
      },
    });
  }

  constructor(props: IProps) {
    super(props);
    props.navigation.setOptions({
      headerRight: this.headerRight,
      headerTitle: '分类',
      headerTintColor: '#fff',
    });
  }

  longPress = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'category/setState',
      payload: {
        isEdit: true,
      },
    });
  };

  onItemClick(
    index: number,
    item: ICategory,
    isEdit: boolean,
    isMyCategories: boolean,
    disable: boolean,
  ) {
    if (!isEdit || disable) {
      return;
    }
    const {myCategories} = this.state;
    if (!isMyCategories) {
      this.setState({
        myCategories: [...myCategories, item],
      });
    } else {
      this.setState({
        myCategories: myCategories.filter(
          (itemInMyCategories) => itemInMyCategories.id !== item.id,
        ),
      });
    }

    const {dispatch} = this.props;
    dispatch({
      type: 'category/setState',
      payload: {
        myCategories,
      },
    });
  }

  renderItem = (item: ICategory, index: number) => {
    const {isEdit} = this.props;
    return (
      <Touchable
        key={item.id}
        onLongPress={this.longPress}
        onPress={() => this.onItemClick(index, item, isEdit, false, false)}>
        <Item
          item={item}
          isEdit={isEdit}
          disable={false}
          isMyCategories={false}
        />
      </Touchable>
    );
  };

  renderMyCategoryItem = (item: ICategory, index: number) => {
    const {isEdit} = this.props;
    const disable = fixItemsIndex.indexOf(index) > -1;
    return (
      <Item
        item={item}
        isEdit={isEdit}
        disable={disable}
        isMyCategories={true}
      />
    );
  };

  onClickItem = (data: ICategory[], item: ICategory, index: number) => {
    const {isEdit} = this.props;
    this.onItemClick(index, item, isEdit, true, false);
  };

  onDataChange = (data: ICategory[]) => {
    this.setState({
      myCategories: data,
    });
  };

  render() {
    const {categories, isEdit} = this.props;
    const {myCategories} = this.state;
    const classifyGroup = _.groupBy(categories, (item) => item.typeName);
    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <ScrollView
          scrollEnabled={this.state.scrollEnabled}
          style={styles.container}>
          <Text style={styles.classifyTitle}>我的分类</Text>
          <View style={styles.classifyView}>
            <DragSortableView
              dataSource={myCategories}
              renderItem={this.renderMyCategoryItem}
              parentWidth={parentWidth}
              childrenHeight={itemHeight}
              childrenWidth={itemWidth}
              sortable={isEdit}
              marginChildrenTop={5}
              onClickItem={this.onClickItem}
              onDataChange={this.onDataChange}
              onDragStart={() => {
                this.setState({
                  scrollEnabled: false,
                });
              }}
              onDragEnd={() => {
                this.setState({
                  scrollEnabled: true,
                });
              }}
              fixedItems={fixItemsIndex}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View>
            {Object.keys(classifyGroup).map((classify) => {
              return (
                <View key={classify}>
                  <Text style={styles.classifyTitle}>{classify}</Text>
                  <View style={styles.classifyView}>
                    {classifyGroup[classify].map((item, index) => {
                      if (
                        myCategories.find(
                          (itemOfMyCategories) =>
                            itemOfMyCategories.id === item.id,
                        )
                      ) {
                        return null;
                      }
                      return this.renderItem(item, index);
                    })}
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
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

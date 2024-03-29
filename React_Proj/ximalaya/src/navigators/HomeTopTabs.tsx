import React from 'react';
import {StyleSheet} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import HomeScreen from '@/screens/pages/Home/HomeScreen';
import TopTabBarWrapper from '@/components/Home/TopTabBarWrapper';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import {ICategory} from '../model/category';
import {createHomeModel} from '@/model/dva';

export type HomeTabParamList = {
  [key: string]: {
    namespace: string;
  };
};
const mapStateToProps = ({category}: RootState) => {
  return {
    myCategories: category.myCategories,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

const TopTab = createMaterialTopTabNavigator<HomeTabParamList>();

class HomeTopTabNavigator extends React.Component<ModelState> {
  renderTabBar = (props: MaterialTopTabBarProps) => {
    return <TopTabBarWrapper {...props} />;
  };

  renderTopTab = (item: ICategory) => {
    //动态创建一个model添加到dva
    createHomeModel('tabs-' + item.id);
    return (
      <TopTab.Screen
        key={item.id}
        component={HomeScreen}
        name={item.id}
        options={{tabBarLabel: item.name}}
        initialParams={{
          //告诉tab要获取哪个model
          namespace: 'tabs-' + item.id,
        }}
      />
    );
  };

  render() {
    const {myCategories} = this.props;
    return (
      <TopTab.Navigator
        lazy
        sceneContainerStyle={styles.sceneContainer}
        tabBar={this.renderTabBar}
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {
            width: 80,
          },
          indicatorStyle: {
            height: 4,
            width: 20,
            marginLeft: 30,
            borderRadius: 2,
            backgroundColor: '#e94922',
          },
          activeTintColor: '#e94922',
          inactiveTintColor: '#F8F8F8',
        }}>
        {myCategories.map(this.renderTopTab)}
      </TopTab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

export default connector(HomeTopTabNavigator);

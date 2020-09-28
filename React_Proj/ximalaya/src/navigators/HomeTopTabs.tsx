import React from 'react';
import {View} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import HomeScreen from '@/screens/pages/Home/HomeScreen';
import TopTabBarWrapper from '@/components/Home/TopTabBarWrapper';

const TopTab = createMaterialTopTabNavigator();

export default class HomeTopTabNavigator extends React.Component {
  renderTabBar = (props: MaterialTopTabBarProps) => {
    return <TopTabBarWrapper {...props} />;
  };
  render() {
    return (
      <TopTab.Navigator
        lazy
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
          inactiveTintColor: '#333',
        }}>
        <TopTab.Screen name="Home" component={HomeScreen} />
      </TopTab.Navigator>
    );
  }
}

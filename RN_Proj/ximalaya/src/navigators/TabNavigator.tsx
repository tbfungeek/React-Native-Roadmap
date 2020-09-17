import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/screens/pages/Home';
import Listen from '@/screens/pages/Listen';
import Found from '@/screens/pages/Found';
import Account from '@/screens/pages/Account';

type TabRootParamList = {
  Home: undefined;
  Found: undefined;
  Listen: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<TabRootParamList>();

export default class TabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator tabBarOptions={{activeTintColor: '#e94922'}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarLabel: '首页'}}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{tabBarLabel: '我听'}}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{tabBarLabel: '发现'}}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{tabBarLabel: '我的'}}
        />
      </Tab.Navigator>
    );
  }
}

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRouteProp} from './StackNavigator';
import Home from '@/screens/pages/Home';
import Listen from '@/screens/pages/Listen';
import Found from '@/screens/pages/Found';
import Account from '@/screens/pages/Account';
import {RootStackNavigation} from '@/navigators/StackNavigator';

export type TabRootParamList = {
  Home: undefined;
  Found: undefined;
  Listen: undefined;
  Account: undefined;
};

interface IProps {
  navigation: RootStackNavigation;
  route: TabRouteProp;
}

const Tab = createBottomTabNavigator<TabRootParamList>();

export default class TabNavigator extends React.Component<IProps> {
  componentDidUpdate() {
    const {navigation, route} = this.props;
    navigation.setOptions({
      headerTitle: this.getTabHeadTitle(route),
    });
  }
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

  getTabHeadTitle(route: TabRouteProp): string {
    const headTitle = route.state
      ? route.state.routes[route.state.index].name
      : route.params.screen || 'Home';

    switch (headTitle) {
      case 'Home':
        return '首页';
      case 'Listen':
        return '我听';
      case 'Found':
        return '发现';
      case 'Account':
        return '我的';
      default:
        return '首页';
    }
  }
}

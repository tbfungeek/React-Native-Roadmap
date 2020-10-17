import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRouteProp} from './StackNavigator';
import Listen from '@/screens/pages/Listen';
import Found from '@/screens/pages/Found';
import Account from '@/screens/pages/Account';
import {RootStackNavigation} from '@/navigators/StackNavigator';
import Icon from '@/assets/iconfont';
import HomeTopTabNavigator from '@/navigators/HomeTopTabs';
import Play from '@/components/Common/Play';

export type TabRootParamList = {
  HomeTopTabNavigator: undefined;
  Found: undefined;
  Play: undefined;
  Listen: undefined;
  Account: undefined;
};
interface IProps {
  navigation: RootStackNavigation;
  route: TabRouteProp;
}

const Tab = createBottomTabNavigator<TabRootParamList>();

export default class TabNavigator extends React.Component<IProps> {
  setUpNavigation() {
    const {navigation, route} = this.props;
    const title = this.getTabHeadTitle(route);
    if (title.length > 0) {
      navigation.setOptions({
        headerTransparent: false,
        headerTitle: title,
      });
    } else {
      navigation.setOptions({
        headerTransparent: true,
        headerTitle: '',
      });
    }
  }

  componentDidMount() {
    this.setUpNavigation();
  }

  componentDidUpdate() {
    this.setUpNavigation();
  }
  render() {
    return (
      <Tab.Navigator tabBarOptions={{activeTintColor: '#e94922'}}>
        <Tab.Screen
          name="HomeTopTabNavigator"
          component={HomeTopTabNavigator}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <Icon name="iconshouye" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{
            tabBarLabel: '我听',
            tabBarIcon: ({color, size}) => (
              <Icon name="iconqingting" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Play"
          component={Play}
          options={{
            tabBarButton: () => {
              return <Play />;
            },
          }}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({color, size}) => (
              <Icon name="iconyikeapp15" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({color, size}) => (
              <Icon name="iconwode" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  getTabHeadTitle(route: TabRouteProp): string {
    const headTitle = route.state
      ? route.state.routes[route.state.index].name
      : 'HomeTopTab';

    switch (headTitle) {
      case 'HomeTopTab':
        return '';
      case 'Listen':
        return '我听';
      case 'Found':
        return '发现';
      case 'Account':
        return '我的';
      default:
        return '';
    }
  }
}

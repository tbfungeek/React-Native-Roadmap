import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@/screens/pages/Home';

const TopTab = createMaterialTopTabNavigator();

export default class HomeTopTabNavigator extends React.Component {
  render() {
    return (
      <TopTab.Navigator
        lazy
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
        <TopTab.Screen name="Home" component={Home} />
        <TopTab.Screen name="Home1" component={Home} />
        <TopTab.Screen name="Home2" component={Home} />
        <TopTab.Screen name="Home3" component={Home} />
        <TopTab.Screen name="Home4" component={Home} />
        <TopTab.Screen name="Home5" component={Home} />
        <TopTab.Screen name="Home6" component={Home} />
        <TopTab.Screen name="Home7" component={Home} />
      </TopTab.Navigator>
    );
  }
}

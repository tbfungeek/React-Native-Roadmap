import {
  NavigationContainer,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import Detail from '@/screens/pages/Detail';
import Category from '@/screens/pages/Category/CategoryScreen';
import {Platform, StyleSheet, StatusBar} from 'react-native';
import Album from '../screens/pages/Album/AlbumScreen';

type RootStackParamList = {
  TabNavigator: {
    screen: string;
  };
  Detail: {
    id: number;
  };
  Album: undefined;
  Category: {};
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
export type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;
export type TabRouteProp = RouteProp<RootStackParamList, 'TabNavigator'> & {
  state?: TabNavigationState;
};

const Stack = createStackNavigator<RootStackParamList>();

export default class StackNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitle: '首页',
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerStatusBarHeight: StatusBar.currentHeight,
            headerTitleStyle: {
              color: 'white',
              fontSize: 16,
            },
            headerStyle: {
              backgroundColor: '#e94922',
              ...Platform.select({
                android: {
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
              }),
            },
          }}>
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Album" component={Album} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

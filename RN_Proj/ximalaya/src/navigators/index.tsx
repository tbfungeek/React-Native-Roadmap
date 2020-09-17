import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import Home from '@/screens/pages/Home';
import Detail from '@/screens/pages/Detail';
import {Platform, StyleSheet} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: number;
  };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
export type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;
export type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;

const Stack = createStackNavigator<RootStackParamList>();

export default class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              ...Platform.select({
                android: {
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
              }),
            },
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerTitle: '首页'}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{headerTitle: '详情页'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

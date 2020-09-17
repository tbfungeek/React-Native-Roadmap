import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import Detail from '@/screens/pages/Detail';
import {Platform, StyleSheet} from 'react-native';

type RootStackParamList = {
  TabNavigator: undefined;
  Detail: {
    id: number;
  };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
export type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;
export type HomeRouteProp = RouteProp<RootStackParamList, 'TabNavigator'>;

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
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

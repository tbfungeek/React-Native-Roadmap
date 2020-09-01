import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import Contracts from './screens/Contacts'
import Profile from './screens/Profile'
import Favorites from './screens/Favorites'
import User from './screens/User'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Contacts'
        screenOptions = {{
          headerStyle: {
            backgroundColor: 'rgb(49,154,220)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen name='Contacts' component={Contracts} options = {
          {
            title:"Cotracts",
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"/>
            )
          }
        }/>
        <Tab.Screen name='Favorites' component={Favorites} initialParams = {{item:{}}} options = {
          ({navigation,route}) => {return {
            title: route.params.name,
          }}
          }/>
          
        <Tab.Screen name='User' component={User} options = {User.navigationOptions}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

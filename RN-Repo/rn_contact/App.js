import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import Contracts from './screens/Contacts'
import Profile from './screens/Profile'
import Favorites from './screens/Favorites'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Favorites'
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
        <Stack.Screen name='Favorites' component={Favorites} options = {
          {
            title:"Favorites",
          }
        }/>
        <Stack.Screen name='Contract' component={Contracts} options = {
          {
            title:"Cotract List",
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"/>
            )
          }
        }/>
        <Stack.Screen name='Profile' component={Profile} initialParams = {{item:{}}} options = {
          ({navigation,route}) => {return {
            title: route.params.name,
          }}
          }/>
      </Stack.Navigator>
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

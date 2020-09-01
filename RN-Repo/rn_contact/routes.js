import 'react-native-gesture-handler';
import React from 'react';

import Contracts from './screens/Contacts'
import Profile from './screens/Profile'
import Favorites from './screens/Favorites'
import User from './screens/User'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

export class MainScreen extends React.Component {
    render() {
        return (
            <NavigationContainer>
              <Tab.Navigator initialRouteName='Contacts'>
                <Tab.Screen name='Contacts' component={ContactsScreens} options = {
                    {
                        tabBarIcon:({ focused, color, size }) => {
                            return <Icon name='contacts' size={size} color={color}/>
                        }
                    }
                }/>

                <Tab.Screen name='Favorites' component={FavoritesScreens} options = {
                    {
                        tabBarIcon:({ focused, color, size }) => {
                            return <Icon name='favorite' size={size} color={color}/>
                        }
                    }
                } />
                <Tab.Screen name='User' component={UserScreens} options = {
                    {
                        tabBarIcon:({ focused, color, size }) => {
                            return <Icon name='assignment-ind' size={size} color={color}/>
                        }
                    }
                }
                />
              </Tab.Navigator>
            </NavigationContainer>
          )
    }   
}

export class ContactsScreens extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Contracts">
                <Stack.Screen name = "Contracts" component = {Contracts}/>
                <Stack.Screen name = "Profile" component = {Profile}/>
            </Stack.Navigator>
        )
    }
}

export class FavoritesScreens extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Favorites">
                <Stack.Screen name = "Favorites" component = {Favorites}/>
                <Stack.Screen name = "Profile" component = {Profile}/>
            </Stack.Navigator>
        )
    }
}

export class UserScreens extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="User">
                <Stack.Screen name = "User" component = {User}/>
            </Stack.Navigator>
        )
    }
}
import 'react-native-gesture-handler';
import React from 'react';
import {MainScreen} from './routes'

//https://icons.expo.fyi/

export default function App() {
  return (
    <MainScreen/>
  )
}
/*
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
}*/

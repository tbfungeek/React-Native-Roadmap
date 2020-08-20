import React from 'react';
import Constants from 'expo-constants'
import { StyleSheet, Text, View ,StatusBar } from 'react-native';
import Card from  './components/Card'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <Card 
            image = {{uri:'https://unsplash.it/600/600'}}
            fullName = {"idealist"} 
            linkText={"Comments"}
            onPressLinkText={
            ()=>{
              console.log('Pressed link!')
            }
            }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    marginTop:Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },

});

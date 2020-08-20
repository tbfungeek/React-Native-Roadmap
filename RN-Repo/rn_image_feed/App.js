import React from 'react';
import Constants from 'expo-constants'
import { StyleSheet, Text, View ,StatusBar } from 'react-native';
import AvatarRow from  './components/AvatarRow'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <AvatarRow style = {styles.avatarRow} 
                   fullName = "idealist" 
                   linkText="Comments" 
                   onPressLinkText={()=>{
                      console.log("=======>");
                   }}>
        </AvatarRow>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    marginTop:Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'flex-start',
    alignItems: 'center',
  },

  avatarRow: {
    alignItems:'stretch'
  }
});

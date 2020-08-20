import React from 'react';
import Constants from 'expo-constants'
import { StyleSheet, Text, View ,StatusBar } from 'react-native';
import CardList from  './components/CardList'
export default class App extends React.Component {
  render() {

    const items = [
        { id: 0, author: 'Bob Ross' },
        { id: 1, author: 'Chuck Jimmy' },
        { id: 3, author: 'Chuck GOOD' },
        { id: 4, author: 'Tomy Norris' },
        { id: 5, author: 'HUG Norris' },
        { id: 6, author: 'DG Norris' },
        { id: 7, author: 'BUGGET Norris' },
        { id: 8, author: 'LATAS Norris' },
        { id: 9, author: 'YESS Norris' },
        { id: 10, author: 'DODO Norris' },
    ];

      
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <CardList items = {items}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    marginTop:Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  }
  
});

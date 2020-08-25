import React from 'react';
import Constants from 'expo-constants'
import { StyleSheet, Platform, View ,StatusBar } from 'react-native';
import Feed from  './components/Feed'
import CommentList from './components/CommentList'
import NavigationBar from './components/NavigationBar'

const platformVersion = Platform.OS === 'ios' ? parseInt(Platform.Version , 10) : Platform.Version

export default class App extends React.Component {
  render() {

    //移除测试数据
    /*
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
    ];*/

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        {/*<Feed style = {styles.feed}/>*/}
        <NavigationBar title = "Hello" leftText = "Close" onPressLeftText = {() => {}}></NavigationBar>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    marginTop:Platform.OS === 'android' || platformVersion < 11 ? Constants.statusBarHeight:0,
    flex: 1,
    alignItems: "stretch"
  },

  /*feed: {
    flex: 1,
  },*/

  comment : {
    flex: 1,
  }
});

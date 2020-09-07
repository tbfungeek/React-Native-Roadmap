import { StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';

import Status from './components/Status'
import MessgeList from './components/MessageList'
import {createTextMessage,createImageMessge,createLocationMessage} from './utils/MessageUtils'

export default class App extends React.Component {


  state = {
    messages: [
      createTextMessage("Hello World"),
      createTextMessage("Hello React Native"),
      createImageMessge('https://unsplash.it/300/300/'),
      createLocationMessage({
        latitude: 37.78825,
        longitude: -122.4324, }),
    ]
  }
  renderMessageList() {
    const {messages} = this.state;
    return (
      <View style={styles.content}>
        <MessgeList messages = {messages} onPressMessage = {()=>{}}/>
      </View>
    )
  }

  renderToolbar() {
    return (
        <View style={styles.toolbar}>
        </View>
    )
  }

  renderInoutMethodEditor () {
    return (
      <View style={styles.inputMethodEditor}>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Status/>
        {this.renderMessageList()}
        {this.renderToolbar()}
        {this.renderInoutMethodEditor()}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex:1,
  },

  content: {
    flex:1,
  },

  inputMethodEditor : {
    flex:1,
    backgroundColor:'blue',
  },

  toolbar : {
    borderTopWidth:1,
    borderTopColor:'rgba(0,0,0,0.04)',
    backgroundColor: 'green',
  },

})
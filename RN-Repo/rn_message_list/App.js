import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderMessageList()}
        {this.renderToolbar()}
        {this.renderInputMethodEditor()}
      </View>
    )
  }

  renderMessageList() {
    return (
      <View style={styles.content}>
      </View>
    )
  }

  renderInputMethodEditor() {
    return (
      <View style = {styles.inputMethodEditor}>

      </View>
    );
  }

  renderToolbar() {
    return (
      <View style = {styles.toolbar}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  content : {
    flex:1,
    backgroundColor:'red',
  },
  inputMethodEditor: {
    flex:1,
    backgroundColor:'blue',
  },
  toolbar: {
    borderTopWidth:1,
    borderTopColor:'rgba(0,0,0,0.04)',
    backgroundColor:'white',
  },
});

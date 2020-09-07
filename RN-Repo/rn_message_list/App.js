import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Status from './components/Status'
//https://github.com/react-native-community/react-native-netinfo

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Status/>
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
  },
  inputMethodEditor: {
    flex:1,
  },
  toolbar: {
    borderTopWidth:1,
    borderTopColor:'rgba(0,0,0,0.04)',
    backgroundColor:'white',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import EditableTimer from './components/EditableTimer'
import ToggleableTimerForm from './components/ToggleableTimerForm'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Timmer
        </Text>
      </View>
      <ScrollView style={styles.timmerList}>
      
        <EditableTimer
          id = "1"
          title = "Mow the lawn"
          project = "House Chores"
          elapsed = "8986300"
          isRunning
        />
        <EditableTimer
          id = "2"
          title = "Bake squash"
          project = "Kitchen Chores"
          elapsed = "3890985"
          editFormOpen
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingTop:75,
    paddingBottom:15,
    borderBottomWidth:1,
    borderBottomColor:'#D6D7DA',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight:'bold',
    textAlign:'center'
  },

  timmerList: {
    backgroundColor:'blue',
    paddingBottom:15,
  }
});

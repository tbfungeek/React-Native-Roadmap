import React from 'react';
import { StyleSheet, Text, View ,ScrollView,StatusBar,KeyboardAvoidingView} from 'react-native';
import EditableTimer from './components/EditableTimer'
import ToggleableTimerForm from './components/ToggleableTimerForm'

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default class App extends React.Component {

  state = {
    timers:[
      {
        title:'Mow the lawn',
        project:'House Chores',
        id: "1",
        elapsed:5456099,
        isRunning:true,
      },
      {
        title:'Bake squash',
        project:'Kitchen Chores',
        id: "2",
        elapsed:1273998,
        isRunning:false,
      }
    ]
  }

  render() {

    const {timers} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
  
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timmer</Text>
        </View>
  
        <KeyboardAvoidingView>
  
        <ScrollView style={styles.timmerList}>
          <ToggleableTimerForm isOpen = {false}></ToggleableTimerForm>

          {
            //map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
            timers.map(({title,project,id,elapsed,isRunning}) => {
              return (
                <EditableTimer
                  key = {id}
                  id = {id}
                  title = {title}
                  project = {project}
                  elapsed = {elapsed}
                  isRunning = {isRunning}/>
              )
            })
          }
        </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingTop:35,
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
    paddingBottom:15,
  }
});

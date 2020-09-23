import React from 'react';
import { StyleSheet, Text, View ,ScrollView,StatusBar,KeyboardAvoidingView} from 'react-native';
import EditableTimer from './components/EditableTimer'
import ToggleableTimerForm from './components/ToggleableTimerForm'
import {newTimer} from './utils/TimeUtils'

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default class App extends React.Component {

  state = {
    timers: [
      {
        title: 'Mow the lawn',
        project: 'House Chores',
        id: Math.random()*1000,
        elapsed: 5460494,
        isRunning: false,
      },
      {
        title: 'Clear paper jam',
        project: 'Office Chores',
        id: Math.random()*1000,
        elapsed: 1277537,
        isRunning: false,
      },
      {
        title: 'Ponder origins of universe',
        project: 'Life Chores',
        id: Math.random()*1000,
        elapsed: 120000,
        isRunning: true,
      },
    ],
  };
  
  componentDidMount() {
    this.intervalId = setInterval(() => {
      
      const {timers} = this.state;
      this.setState({  
        timers : timers.map((timer) => {
          const {isRunning} = timer;
          if (isRunning) {
            timer.elapsed += 1000;
          }
          return timer;
        })
      })
      
    },1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onCreateTimmerForm = (timer) => {
    this.setState({timers:[newTimer(timer),...this.state.timers]});
  }

  onUpdateTimmerForm = (timer) => {

    const {timers} = this.state;

    this.setState(
      { timers: timers.map((time) => {
          if(time.id === timer.id) {
            const {title, project} = timer;
            return {
              ...time,
              title,
              project
            }
          }
          return time;
        })
      }
    )
  }

  onRemoveTimmerForm = (timerId) => {
    this.setState(
      { 
        timers: this.state.timers.filter( (t) => t.id !== timerId)
      }
    )
  }

  toggleTimer = (timerId) => {
    
    const { timers } = this.state;

    this.setState(
      { timers:timers.map((t) => {
          if (t.id === timerId) {
            t.isRunning = !t.isRunning;
          }
          return t;
        }) 
      }
    )
  }

  render() {

    const {timers} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
  
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timmer</Text>
        </View>
  
        <KeyboardAvoidingView behavior="padding" style = {styles.timerListContainer}>
        {/*contentContainerStyle 注意这里不是style*/}
        <ScrollView contentContainerStyle={styles.timmerList}>
          <ToggleableTimerForm isOpen = {false} onCreateTimmerForm = {this.onCreateTimmerForm}></ToggleableTimerForm>

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
                  isRunning = {isRunning}
                  onUpdateTimer = {this.onUpdateTimmerForm}
                  onRemoveTimer = {this.onRemoveTimmerForm}
                  onStartTimer = {this.toggleTimer}
                  onStopTimer = {this.toggleTimer}
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
  timerListContainer: {
    //KeyboardAvoidingView 一定要加这句不然不生效
    flex: 1,
  },
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

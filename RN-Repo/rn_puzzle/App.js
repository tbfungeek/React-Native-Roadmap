import {LinearGradient} from 'expo-linear-gradient';
import {Constants} from 'expo-constants'
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View , 
  StatusBar, 
  SafeAreaView , 
  Platform,
  UIManager
} from 'react-native';
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'

if (Platform.OS == 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const BACKGROUND_COLORS = ['#1B1D34', '#2A2A38'];
export default class App extends React.Component {

  state = {
    size:3,
    puzzle:null,
    image:null,
  };
  render() {

    const {size , puzzle, image} = this.state;

    return (
      <LinearGradient style={styles.background} colors={BACKGROUND_COLORS}>
        <StatusBar barStyle={'light-content'} />
        <SafeAreaView style={styles.container}>

        {!puzzle && (
          <StartScreen size = {size} 
               onChangeSize = {this.handleChangeSize}
               onStartGame = {this.handleStartGame} />
        )}

        {puzzle && (
          <GameScreen  puzzle = {puzzle}
                       image = {image}
                       onChange = {this.handleGameChange}
                       onQuit = {this.handleGameQuit}/>
        )}
        </SafeAreaView>
      </LinearGradient>
    )
  }

  handleStartGame = () => {

  }

  handleChangeSize = () => {
    
  }

  handleGameChange = () => {

  }

  handleGameQuit = () => {

  }
}

const styles = StyleSheet.create({
  background: {
    flex : 1,
  },
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' || parseInt(Platform.Version,10) < 11 ? Constants.StatusBarHeight:0
  },
});

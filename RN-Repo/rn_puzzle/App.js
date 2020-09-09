import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import { 
  StyleSheet, 
  Image,
  StatusBar, 
  SafeAreaView , 
  Platform,
  UIManager
} from 'react-native';
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'
import {getRandomImage} from './utils/api'
import {createPuzzle} from './utils/puzzle'

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

  async componentDidMount() {
    this.preloadNextImage()
  }

  async preloadNextImage() {
    const image = await getRandomImage()
    Image.prefetch(image.uri)
    this.setState({image})
  }

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
    const { size } = this.state;
    this.setState({ puzzle: createPuzzle(size) });
  }

  handleChangeSize = size => {
    this.setState({ size });
  };

  handleGameChange = puzzle => {
    this.setState({ puzzle });
  };

  handleGameQuit = () => {
    this.setState({ puzzle: null, image: null });
    this.preloadNextImage();
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

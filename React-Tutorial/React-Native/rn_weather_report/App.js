import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View , 
  Platform, 
  KeyboardAvoidingView,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import SearchInput from './components/searchInput';
import getWeatherImage from './utils/getImageForWeather'
import {getLocationId , getWeather} from './utils/api'

import { white } from 'ansi-colors';

export default class App extends React.Component {

  state = {
    weather:""
  }

  constructor(props) {
    super(props)
    this.state = {
      loading:false,
      error:false,
      temperature:0,
      weather:"",
      location:""
    }
  }

  componentDidMount() {
    this.handleLocation("New York")
    this.setState({weather:"Showers"},() => console.log(this.state))
  }

  handleLocation = async (city) => {
    //setState 可以包含两个参数第一个是需要设置的状态，第二个是state更新完毕后需要执行的回调
    this.setState({loading:true}, async () => {
      try {
        const locationId = await getLocationId(city);
        const { location, weather, temperature } = await getWeather(locationId);
        this.setState({
          loading:false,
          error:false,
          location,
          weather,
          temperature
        })
      } catch(e) {
        this.setState({
          loading:false,
          error:true,
        })
      }
    })
  }

  render () {

    const {loading,location,weather,temperature,error} = this.state

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar barStyle="light-content"/>
      <ImageBackground
          source = {getWeatherImage(weather)}
          style = {styles.imageContainer}
          imageStyle = {styles.imagesStyle} >
        <View style = {styles.detailContainer}>

          <ActivityIndicator animating = {loading} color = "white" size="small" />

          {!loading && (
            <View>

              {error && (
                <Text style={[styles.textStyle, styles.smallText]}>
                  Could not load weather, please try a different city.
                </Text>
              )}

              {!error && (
                <View>
                <Text style = {[styles.textStyle, styles.largeText]}>{location}</Text>
                <Text style = {[styles.textStyle, styles.smallText]}>{weather}</Text>
                <Text style = {[styles.textStyle, styles.largeText]}>{`${Math.round(temperature)}`}</Text>
                <SearchInput placeholder="Input City You want to Search ..." onSubmit = {this.handleLocation}/>
                </View>
              )}

            </View>
          )}


        </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems:'center',
  },

  textStyle: {
    textAlign:'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
      },
      android: {
        fontFamily: 'Roboto',
      }
    }),
    color:'white',
  },

  largeText: {
    fontSize:44,
  },

  smallText: {
    fontSize:28,
  },

  imageContainer: {
    flex:1
  },
  imagesStyle: {
    flex: 1,
    resizeMode: 'cover',
  },
});

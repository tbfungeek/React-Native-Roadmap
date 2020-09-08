import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Alert,
  Image,
  TouchableHighlight,
  BackHandler,
} from 'react-native';
import Status from './components/Status';
import Toolbar from './components/Toolbar';
import ImageGrid from './components/ImageGrid'
//https://github.com/react-native-community/react-native-netinfo
import MessageList from './components/MessageList';
import {createImageMessage,createTextMessage,createLocationMessage} from './utils/MessageUtils'

export default class App extends React.Component {

  state = {
    messages: [
      createImageMessage('https://unsplash.it/300/300/'), 
      createTextMessage('World'), 
      createTextMessage('Hello'), 
      createLocationMessage({ latitude: 37.78825 , longitude: -122.4324, }),
    ], 

    fullScreenImageId: null,

    inputFocus:false,

  };

  dismissFullScreenImage = () => {
    this.setState({fullScreenImageId:null});
  };

  componentWillMount() {

    this.subscription = BackHandler.addEventListener('hardwareBackPress', () => {

      const {fullScreenImageId} = this.state;

      if (fullScreenImageId) {
        this.dismissFullScreenImage();
        return true;
      }

      return false;
    });
  }

  componentWillUnmount() {
    this.subscription.remove();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Status/>
        {this.renderMessageList()}
        {this.renderToolbar()}
        {this.renderInputMethodEditor()}
        {this.renderFullScreenImage()}
      </View>
    )
  }

  renderMessageList() {
    const { messages } = this.state;
    return (
      <MessageList style={styles.content} messages = {messages} onPressMessage = {this.handlePressMessage}/>
    )
  }

  handlePressImage = (uri) => {
    const {messages} = this.state;
    this.setState({
      messages:[createImageMessage(uri),...messages]
    });
  }

  renderInputMethodEditor() {
    return (
      <View style = {styles.inputMethodEditor}>
        <ImageGrid onPressImage = {this.handlePressImage}/>
      </View>
    );
  }

  renderToolbar() {
    const {inputFocus} = this.state;
    return (
      <Toolbar style = {styles.toolbar} 
              onSubmit = {this.handleSubmit}
              isFocused = {inputFocus}
              onPressCamera = {this.handleCamera}
              onPressLocation = {this.handleLocation}
              onChangeFocus = {this.handleFocusChange}/>
    )
  }

  handleSubmit = (text) => {
    const {messages} = this.state;
    this.setState({messages:[createTextMessage(text),...messages]});
  }

  handleCamera = () => {

  }

  handleLocation = () => {
    const {messages} = this.state;
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords: {latitude,longitude}} = position;
      this.setState({ messages:
        [createLocationMessage({latitude,longitude}),...messages]
      })
    })

  }

  handleFocusChange = (focus) => {
    console.log(focus);
    self.setState({inputFocus:focus});
  }

  renderFullScreenImage = () => {
    const {messages, fullScreenImageId} = this.state;
    if (!fullScreenImageId) return null;

    const message = messages.find(message => message.id === fullScreenImageId);
    if (!message) return null;

    const {image} = message;

    return (
      <TouchableHighlight style = {styles.fullScreenOverlay} onPress = {this.dismissFullScreenImage}>
        <Image style={styles.fullScreenImage} source={{uri:image}}/>
      </TouchableHighlight>
    );

  }

  handlePressMessage = ({id,type}) => {
    switch (type) {
      case 'text':
        Alert.alert(
          'Delete message?',
          'Are you sure you want to permanently delete this message?',
          [
            {
                text:'Cancel',
                style:'cancel'
            },
            {
                text:'Delete',
                style:'destructive',
                onPress: () => {
                  const {messages} = this.state;
                  this.setState({messages:messages.filter((message) => message.id !== id)})
                }
            }
          ]
        )
        break;
        case 'image':
        this.setState({fullScreenImageId:id,inputFocus:false})
        break;
    }
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
    backgroundColor:'white'
  },
  toolbar: {
    borderTopWidth:1,
    borderTopColor:'rgba(0,0,0,0.04)',
    backgroundColor:'white',
  },
  fullScreenOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'black',
    zIndex:2,
  },
  fullScreenImage: {
    flex:1,
    resizeMode: 'contain',
  }
});

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
import Status from './components/Status'
//https://github.com/react-native-community/react-native-netinfo
import MessageList from './components/MessageList'
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
        this.setState({fullScreenImageId:id})
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

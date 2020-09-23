import React from 'react';
import Constants from 'expo-constants'
import { StyleSheet, Platform, View ,StatusBar, Modal , AsyncStorage} from 'react-native';
import Feed from  './screens/Feed'
import Comment from  './screens/Comment'

const platformVersion = Platform.OS === 'ios' ? parseInt(Platform.Version , 10) : Platform.Version

const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';

export default class App extends React.Component {

  state = {
    commentsForItem: {},
    showModal:false,
    selectedItemId:null,
  }

  openCommentScreen = id => {
    this.setState({
      showModal: true,
      selectedItemId: id,
    });
  }

  closeCommentScreen = () => {
    this.setState({ 
      showModal:false,
      selectedItemId: null,
    })
  }

  async componentDidMount() {

    try {
      const commentsForItem = await AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY);
      this.setState({commentsForItem : commentsForItem ? JSON.parse(commentsForItem):{}})
    } catch (error) {
      
    }

  }

  handleSubmitComment = (comment) => {

    const {selectedItemId, commentsForItem} = this.state;

    const comments = commentsForItem[selectedItemId] || [];

    const update = {
      ...commentsForItem,
      [selectedItemId]:[...comments,comment],
    };

    this.setState({commentsForItem:update});

    AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY,JSON.stringify(update));

  }

  render() {

    const {commentsForItem,showModal,selectedItemId} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <Feed 
            style = {styles.feed}
            commentsForItem = {commentsForItem}
            onPressComments = {this.openCommentScreen}
        />

        <Modal
          visible = {showModal}
          animationType = 'slide'
          onRequestClose = {this.closeCommentScreen}>
            <Comment
              style = {styles.container}
              comments = {commentsForItem[selectedItemId] || []}
              onSubmitComment = {this.handleSubmitComment}
              onClose = {this.closeCommentScreen}/>
        </Modal>
      </View>
    )
  }
}


const styles = StyleSheet.create({

  container: {
    marginTop:Platform.OS === 'android' || platformVersion < 11 ? Constants.statusBarHeight:0,
    flex: 1,
    alignItems: "stretch"
  },

  feed: {
    flex: 1,
  },
});

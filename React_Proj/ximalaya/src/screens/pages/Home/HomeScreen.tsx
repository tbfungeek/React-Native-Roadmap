import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RootStackNavigation} from '@/navigators/StackNavigator';
import Carousel from '@/components/Home/Carousel';
import Guess from '@/components/Home/Guess';
import ChannelList from '@/components/Home/ChannelList';

interface IProps /*extends ModelState*/ {
  navigation: RootStackNavigation;
}

class HomeScreen extends React.Component<IProps> {
  get header() {
    return (
      <View>
        <Carousel />
        <View style={styles.container}>
          <Guess />
        </View>
      </View>
    );
  }
  render() {
    return <ChannelList listHeader={this.header} />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default HomeScreen;

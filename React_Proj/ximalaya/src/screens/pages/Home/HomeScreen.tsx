import React from 'react';
import {View} from 'react-native';
import {RootStackNavigation} from '@/navigators/StackNavigator';
import Carousel from '@/components/Home/Carousel';
import Guess from '@/components/Home/Guess';

interface IProps /*extends ModelState*/ {
  navigation: RootStackNavigation;
}

class HomeScreen extends React.Component<IProps> {
  render() {
    return (
      <View>
        <Carousel />
        <Guess />
      </View>
    );
  }
}

export default HomeScreen;

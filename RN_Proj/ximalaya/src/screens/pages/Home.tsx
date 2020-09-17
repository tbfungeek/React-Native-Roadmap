import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigators/index';

interface IProps {
  navigation: RootStackNavigation;
}

export default class Home extends React.Component<IProps> {
  handlePress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {id: 100});
  };

  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button title="跳转到详情页" onPress={this.handlePress} />
      </View>
    );
  }
}

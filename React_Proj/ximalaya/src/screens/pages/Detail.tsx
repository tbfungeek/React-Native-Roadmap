import React from 'react';
import {View, Text} from 'react-native';
import {DetailRouteProp} from '@/navigators/StackNavigator';

interface IProps {
  route: DetailRouteProp;
}

export default class Detail extends React.Component<IProps> {
  render() {
    //const {route} = this.props;
    return (
      <View>
        <Text>Detail</Text>
      </View>
    );
  }
}

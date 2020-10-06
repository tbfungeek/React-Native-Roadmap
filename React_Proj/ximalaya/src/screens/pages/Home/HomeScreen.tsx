import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RootStackNavigation} from '@/navigators/StackNavigator';
import Carousel from '@/components/Home/Carousel';
import Guess from '@/components/Home/Guess';
import ChannelList from '@/components/Home/ChannelList';
import {RouteProp} from '@react-navigation/native';
import {HomeTabParamList} from '@/navigators/HomeTopTabs';

interface IProps /*extends ModelState*/ {
  navigation: RootStackNavigation;
  route: RouteProp<HomeTabParamList, string>;
}

class HomeScreen extends React.Component<IProps> {
  get header() {
    const {route, navigation} = this.props;
    const namespace = route.params.namespace;
    return (
      <View>
        <Carousel modelNameSpace={namespace} navigation={navigation} />
        <View style={styles.container}>
          <Guess modelNameSpace={namespace} navigation={navigation} />
        </View>
      </View>
    );
  }
  render() {
    const {route, navigation} = this.props;
    const namespace = route.params.namespace;
    return (
      <ChannelList
        modelNameSpace={namespace}
        listHeader={this.header}
        navigation={navigation}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default HomeScreen;

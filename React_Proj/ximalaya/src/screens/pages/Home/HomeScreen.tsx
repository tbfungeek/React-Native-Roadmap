import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RootStackNavigation} from '@/navigators/StackNavigator';
import Carousel from '@/components/Home/Carousel';
import Guess from '@/components/Home/Guess';
import ChannelList from '@/components/Home/ChannelList';
import {RouteProp} from '@react-navigation/native';
import {HomeTabParamList} from '@/navigators/HomeTopTabs';
import {IChannel, IGuess} from '@/model/home';

interface IProps /*extends ModelState*/ {
  navigation: RootStackNavigation;
  route: RouteProp<HomeTabParamList, string>;
}

class HomeScreen extends React.Component<IProps> {
  get header() {
    const {route} = this.props;
    const namespace = route.params.namespace;
    return (
      <View>
        <Carousel modelNameSpace={namespace} />
        <View style={styles.container}>
          <Guess modelNameSpace={namespace} goAlbum={this.goAlbum} />
        </View>
      </View>
    );
  }
  render() {
    const {route} = this.props;
    const namespace = route.params.namespace;
    return (
      <ChannelList
        modelNameSpace={namespace}
        listHeader={this.header}
        goAlbum={this.goAlbum}
      />
    );
  }

  goAlbum = (item: IChannel | IGuess) => {
    const {navigation} = this.props;
    navigation.navigate('Album', {item});
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default HomeScreen;

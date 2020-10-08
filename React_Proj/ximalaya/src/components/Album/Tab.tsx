import {extend} from 'lodash';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabView} from 'react-native-tab-view';
import AlbumList from './AlbumList';
import Introduction from './Introduction';

interface IRoute {
  key: string;
  title: string;
}

class Tab extends React.Component {
  state = {
    index: 1,
    routes: [
      {key: 'introductions', title: '简介'},
      {key: 'albums', title: '节目列表'},
    ],
  };
  render() {
    return (
      <TabView
        navigationState={this.state}
        onIndexChange={this.onIndexChange}
        renderScene={this.renderScene}
      />
    );
  }

  renderScene = ({route}: {route: IRoute}) => {
    switch (route.key) {
      case 'introductions':
        return <Introduction />;
      case 'albums':
        return <AlbumList />;
    }
  };

  onIndexChange = (index: number) => {
    this.setState({index});
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

export default Tab;

import {extend} from 'lodash';
import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {SceneRendererProps, TabBar, TabView} from 'react-native-tab-view';
import AlbumList from './AlbumList';
import Introduction from './Introduction';

interface IRoute {
  key: string;
  title: string;
}

interface IState {
  routes: IRoute[];
  index: number;
}

interface IProps {}

class Tab extends React.Component<IProps, IState> {
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
        renderTabBar={this.renderTabBar}
      />
    );
  }

  renderTabBar = (props: SceneRendererProps & {navigationState: IState}) => {
    return (
      <TabBar
        {...props}
        scrollEnabled={true}
        tabStyle={styles.tabStyle}
        labelStyle={styles.labelStyle}
        style={styles.tabbar}
        indicatorStyle={styles.indicatorStyle}
      />
    );
  };

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
  tabStyle: {
    width: 90,
  },
  labelStyle: {
    color: '#333',
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  indicatorStyle: {
    backgroundColor: '#F75959',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    ...Platform.select({
      android: {
        elevation: 0,
        borderBottomWidth: 0,
      },
    }),
  },
});

export default Tab;

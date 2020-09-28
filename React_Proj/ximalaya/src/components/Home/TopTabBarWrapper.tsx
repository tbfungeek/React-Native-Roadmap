import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Touchable from '@/components/Common/Touchable';
import LinearGradient from 'react-native-linear-gradient';

import {
  MaterialTopTabBarProps,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';

interface IProps extends MaterialTopTabBarProps {}

class TopTabBarWrapper extends React.Component<IProps> {
  render() {
    const {props} = this;
    return (
      <View style={styles.topbarWrapper}>
        <LinearGradient
          colors={['red', 'blue']}
          style={styles.linearGradientStyle}
        />
        <View style={styles.tarbarView}>
          <MaterialTopTabBar {...props} style={styles.barStyle} />
          <Touchable style={styles.catagoriesBtn}>
            <Text style={styles.catagoriesText}>分类</Text>
          </Touchable>
        </View>
        <View style={styles.bar}>
          <Touchable style={styles.searchBar}>
            <Text style={styles.searchText}>搜索</Text>
          </Touchable>
          <Touchable style={styles.historyBar}>
            <Text style={styles.historyText}>历史</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradientStyle: {
    ...StyleSheet.absoluteFillObject,
    height: 260,
  },
  topbarWrapper: {
    paddingTop: getStatusBarHeight() /*给tabbar留出空间*/,
    backgroundColor: '#fff',
  },
  barStyle: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'transparent' /*默认这里为白色，需要修改为透明*/,
    elevation: 0 /*tab会有投影 这里是用来去投影的*/,
  },
  tarbarView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  catagoriesBtn: {
    paddingHorizontal: 10,
    marginRight: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#ccc',
  },

  catagoriesText: {
    fontSize: 14,
  },

  bar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.1)',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  searchText: {
    color: '#666',
    paddingHorizontal: 20,
  },
  historyBar: {
    marginRight: 20,
  },
  historyText: {
    color: '#666',
  },
});

export default TopTabBarWrapper;

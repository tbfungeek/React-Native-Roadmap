import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Touchable from '@/components/Common/Touchable';
import LinearAnimatedGradientTransition from 'react-native-linear-animated-gradient-transition';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';

import {
  MaterialTopTabBarProps,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';

/**
 *  先建立state到prop的映射表
 */
const mapStateToProps = ({home}: RootState) => {
  return {
    gradientVisible: home.gradientVisible,
    linearGradient:
      home.carousel && home.carousel.length > 0
        ? home.carousel[home.activeCarouselIndex].colors
        : undefined,
  };
};

/**
 * 将映射表用connect连接起来
 */
const Connector = connect(mapStateToProps);

/**
 * 定义一个ModelState
 */
type ModelState = ConnectedProps<typeof Connector>;

/**
 * 声明Props类型
 */
type IProps = MaterialTopTabBarProps & ModelState;

class TopTabBarWrapper extends React.Component<IProps> {
  render() {
    let {
      linearGradient = ['#ccc', '#e2e2e2'],
      gradientVisible,
      indicatorStyle,
      ...restProps
    } = this.props;
    const textStyle = {color: !gradientVisible ? '#666' : '#fff'};

    if (gradientVisible) {
      indicatorStyle = StyleSheet.compose(indicatorStyle, {
        backgroundColor: '#fff',
      });
    }
    return (
      <View style={styles.topbarWrapper}>
        {gradientVisible && (
          <LinearAnimatedGradientTransition
            colors={linearGradient}
            style={styles.linearGradientStyle}
          />
        )}
        <View style={styles.tarbarView}>
          <MaterialTopTabBar
            {...restProps}
            style={styles.barStyle}
            activeTintColor={!gradientVisible ? '#666' : '#fff'}
            indicatorStyle={indicatorStyle}
          />
          <Touchable style={styles.catagoriesBtn}>
            <Text style={[textStyle, styles.catagoriesText]}>分类</Text>
          </Touchable>
        </View>
        <View style={styles.bar}>
          <Touchable style={styles.searchBar}>
            <Text style={[styles.searchText, textStyle]}>搜索</Text>
          </Touchable>
          <Touchable style={styles.historyBar}>
            <Text style={[styles.historyText, textStyle]}>历史</Text>
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

export default Connector(TopTabBarWrapper);

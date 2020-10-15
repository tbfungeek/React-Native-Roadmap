import {screenWidth} from '@/utils/DimensionsUtils';
import React from 'react';
import {Animated, Easing, Text} from 'react-native';
import {IBarrage} from './Barrage';

interface IProps {
  data: IBarrage;
  outside: (data: IBarrage) => void;
}

class BarrageItem extends React.PureComponent<IProps> {
  translateX = new Animated.Value(0);
  componentDidMount() {
    const {outside, data} = this.props;
    Animated.timing(this.translateX, {
      toValue: 10,
      duration: 6000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(({finished}) => {
      if (finished && outside) {
        outside(data);
      }
    });
  }
  render() {
    const {data} = this.props;
    
    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: data.trackerIndex * 30,
          transform: [
            {
              translateX: this.translateX.interpolate({
                inputRange: [0, 10],
                outputRange: [screenWidth, 0],
              }),
            },
          ],
        }}>
        <Text>{data.title}</Text>
      </Animated.View>
    );
  }
}

export default BarrageItem;

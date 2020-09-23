import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

function wp(percent: number): number {
  let value = (screenWidth * percent) / 100;
  return Math.round(value);
}

function hp(percent: number): number {
  let value = (screenHeight * percent) / 100;
  return Math.round(value);
}

export {screenWidth, screenHeight, wp, hp};

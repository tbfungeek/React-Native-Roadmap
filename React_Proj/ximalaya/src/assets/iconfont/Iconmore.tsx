/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const Iconmore: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M297.585 956.925c-41.991-33.344-42.912-56.56-3.659-95.78C404.15 751.012 514.364 640.87 624.749 530.898c6.365-6.341 14.213-11.193 25.944-20.281-21.671-19.66-39.584-34.654-56.074-51.076-102.902-102.48-205.546-205.218-308.137-308.01-31.366-31.427-24.907-72.662 12.952-85.261 21.544-7.17 38.085 1.361 52.962 16.269 66.249 66.386 132.622 132.648 198.936 198.968 60.97 60.976 122.012 121.88 182.846 182.991 31.577 31.72 31.301 60.136-0.677 92.129-125.656 125.715-251.351 251.391-377.17 376.942-8.398 8.38-17.954 15.598-26.971 23.356h-31.775z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconmore.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconmore) : Iconmore;

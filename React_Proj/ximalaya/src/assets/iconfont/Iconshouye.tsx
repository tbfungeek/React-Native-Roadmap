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

const Iconshouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M554.965333 101.248l406.954667 373.034667a34.133333 34.133333 0 0 1-23.04 59.306666l-40.277333-0.042666v298.666666a85.333333 85.333333 0 0 1-85.333334 85.333334h-597.333333a85.333333 85.333333 0 0 1-85.333333-85.333334v-298.666666h-40.234667a34.133333 34.133333 0 0 1-23.04-59.264l406.912-373.034667a59.733333 59.733333 0 0 1 80.725333 0zM312.448 591.36a42.666667 42.666667 0 0 0 0 60.330667 279.978667 279.978667 0 0 0 395.946667 0 42.666667 42.666667 0 0 0-60.330667-60.330667 194.645333 194.645333 0 0 1-275.242667 0 42.666667 42.666667 0 0 0-60.373333 0z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

Iconshouye.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconshouye) : Iconshouye;

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

const Iconplay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M273.841959 32.504242l634.647273 365.040485c104.463515 61.253818 100.538182 166.260364-1.318788 226.257455l-642.482425 370.036363c-52.224 28.765091-110.979879 45.009455-167.144727 11.264C51.851171 977.594182 38.787413 933.841455 38.787413 886.334061V137.510788C38.787413 90.003394 55.760989 46.250667 100.165353 18.773333 157.617959-15.003152 220.299171 1.241212 273.841959 32.504242z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconplay.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconplay) : Iconplay;

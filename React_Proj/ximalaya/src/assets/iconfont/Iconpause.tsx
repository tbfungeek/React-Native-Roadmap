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

const Iconpause: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M105.654016 0m102.4 0l0 0q102.4 0 102.4 102.4l0 819.2q0 102.4-102.4 102.4l0 0q-102.4 0-102.4-102.4l0-819.2q0-102.4 102.4-102.4Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M617.654016 0m102.4 0l0 0q102.4 0 102.4 102.4l0 819.2q0 102.4-102.4 102.4l0 0q-102.4 0-102.4-102.4l0-819.2q0-102.4 102.4-102.4Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconpause.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconpause) : Iconpause;

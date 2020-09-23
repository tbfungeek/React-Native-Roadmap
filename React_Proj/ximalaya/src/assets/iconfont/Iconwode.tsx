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

const Iconwode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64h248.9v248.9c0 137.5-111.4 248.9-248.9 248.9S263.1 450.4 263.1 312.9 374.5 64 512 64zM288 611.6h448c96.2 0 174.2 78 174.2 174.2v24.9c0 82.5-66.9 149.3-149.3 149.3H263.1c-82.5 0-149.3-66.9-149.3-149.3v-24.9c-0.1-96.2 77.9-174.2 174.2-174.2z"
        fill={getIconColor(color, 0, '#2C2C2C')}
      />
    </Svg>
  );
};

Iconwode.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconwode) : Iconwode;

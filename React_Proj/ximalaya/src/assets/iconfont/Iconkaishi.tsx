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

const Iconkaishi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M856.177778 560.355556L216.177778 992.711111c-25.6 17.066667-62.577778 11.377778-79.644445-14.222222-5.688889-11.377778-8.533333-22.755556-8.533333-34.133333V79.644444c0-31.288889 25.6-56.888889 56.888889-56.888888 11.377778 0 22.755556 2.844444 31.288889 8.533333l637.155555 432.355555c25.6 17.066667 34.133333 54.044444 14.222223 79.644445 0 5.688889-5.688889 11.377778-11.377778 17.066667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconkaishi.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconkaishi) : Iconkaishi;

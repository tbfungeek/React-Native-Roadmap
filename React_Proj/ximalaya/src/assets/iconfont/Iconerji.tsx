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

const Iconerji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M857.16992 389.96992m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M907.66848 509.94176c-0.08192-11.11552-11.27936-22.1696-22.41024-22.08256-11.12064 0.0768-22.10816 11.05408-22.02624 22.17984l0.11776 35.76832v48.3072H770.1504c-24.41216 0-44.38528 19.968-44.38528 44.38528v219.70432c0 24.41216 19.97312 44.38016 44.38528 44.38016h93.20448c24.41728 0 44.38528-19.968 44.38528-44.38016v-310.13376l-0.07168-38.12864z m-44.3136 348.25728H770.1504v-219.70432h93.20448v219.70432zM512 172.49792c108.99456 0.45056 206.1056 50.00192 270.45888 127.71328l0.06144-0.04096c6.41024 8.91904 21.5552 11.74016 30.63296 5.55008 9.05728-6.15936 12.07296-20.99712 6.18496-30.2336l-0.29184-0.41984c-72.192-88.93952-182.05184-146.00704-305.55136-146.9184v-0.0768c-0.50688 0-0.99328 0.03584-1.50016 0.03584-0.50176 0-0.9984-0.03584-1.50016-0.03584v0.0768c-218.31168 1.61792-394.24 178.46784-394.24 397.16352v332.88704c0 24.41216 19.97312 44.38016 44.38528 44.38016H253.8496c24.41216 0 44.38528-19.968 44.38528-44.38016v-219.70432c0-24.41728-19.97312-44.38528-44.38528-44.38528H160.64512V525.312c0-194.78528 156.75904-352.00512 351.35488-352.81408z m-258.1504 465.9968v219.70432H160.64512v-219.70432H253.8496z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconerji.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconerji) : Iconerji;
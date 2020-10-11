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

const Icondown: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M537.4319104 710.23501267c0 6.504065-2.43902417 13.00812999-7.41869907 17.9878049-9.95934979 9.95934979-26.01626001 9.95934979-35.9756098 1e-8L97.59451194 331.7797288c-9.95934979-9.95934979-9.95934979-26.01626001 0-35.97560982 9.95934979-9.95934979 26.01626001-9.95934979 35.97560979 1e-8L530.01321133 692.24720776c4.87804916 4.97967489 7.41869907 11.4837399 7.41869907 17.98780491z"
        fill={getIconColor(color, 0, '#020202')}
      />
      <Path
        d="M933.875 313.79192388c0 6.504065-2.43902417 13.00812999-7.41869906 17.98780491L530.01321133 728.22281757c-9.95934979 9.95934979-26.01626001 9.95934979-35.9756098 1e-8-9.95934979-9.95934979-9.95934979-26.01626001 0-35.97560982l396.4430896-396.44308878c9.95934979-9.95934979 26.01626001-9.95934979 35.97560981 1e-8 4.87804916 4.97967489 7.41869907 11.4837399 7.41869906 17.9878049z"
        fill={getIconColor(color, 1, '#020202')}
      />
    </Svg>
  );
};

Icondown.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icondown) : Icondown;

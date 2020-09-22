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

const Iconqingting: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M610.2 573.6c5.5-10.1 1.7-22.7-8.3-28.1l-118.6-64c-3-1.6-6.5-2.5-9.9-2.5-11.5 0-20.7 9.3-20.7 20.7V630c0 3.5 0.9 7 2.6 10.1 5.6 10 18.2 13.5 28.2 8l118.6-66.3c3.4-1.9 6.2-4.8 8.1-8.2zM510.4 234h6.9C648.6 234 755 340.4 755 471.7v170.8c0 131.3-106.4 237.7-237.7 237.7h-6.9c-131.3 0-237.7-106.4-237.7-237.7V471.7c0-131.3 106.4-237.7 237.7-237.7z m373.1 214c28.2 0 50.9 22.8 50.9 51v155c0 37.7-30.5 68.3-68.2 68.3s-68.3-30.6-68.3-68.3V474.2c0-158.3-130.3-286.8-289.3-283.8-155.4 3-278.3 133.1-278.3 288.6v175c0 37.7-30.6 68.3-68.3 68.3h-4.2c-37.7 0-68.3-30.6-68.3-68.3V498.9c0-28.2 22.8-51 51-51h4.2c13.5-192.1 174-344.2 369.4-344.2S870 255.9 883.5 448z"
        fill={getIconColor(color, 0, '#BEBEC3')}
      />
    </Svg>
  );
};

Iconqingting.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconqingting) : Iconqingting;

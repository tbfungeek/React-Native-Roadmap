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

const Iconplay1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M833.024 376.832c-10.24 2.56-102.4-43.008-123.392-57.856-20.48-16.384-39.936-29.184-53.76-43.008-12.8-12.288-23.04-16.896-30.208-13.312s-10.752 10.24-10.752 19.456l-1.024 404.48v50.176c0 10.752-2.048 40.448-14.848 60.928-18.944 29.184-62.976 88.576-181.248 83.456-97.792-4.096-180.224-77.312-180.224-147.968 0-69.632 35.84-122.368 114.176-148.48 81.408-27.136 186.368 11.776 186.368 11.776s0.512-339.968 1.024-427.008c0-16.896 4.608-31.232 13.312-41.984s20.48-17.408 35.328-18.944c12.288-1.536 22.528 0.512 30.208 7.68 8.192 6.656 15.872 16.384 24.064 28.16s18.432 25.6 30.208 40.96c12.288 15.36 28.16 30.208 49.152 45.056 17.408 13.312 33.28 23.04 46.592 29.184 13.312 5.632 25.6 11.264 36.864 16.384 12.288 4.608 38.4 98.816 28.16 100.864z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 10.24C235.008 10.24 10.24 235.008 10.24 512s224.768 501.76 501.76 501.76 501.76-224.768 501.76-501.76-224.768-501.76-501.76-501.76z m0 964.096c-255.488 0-462.336-206.848-462.336-462.336S256.512 49.664 512 49.664s462.336 206.848 462.336 462.336-206.848 462.336-462.336 462.336z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconplay1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconplay1) : Iconplay1;

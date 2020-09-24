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

const Iconchange: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M107.776 512c0 104.768 40.192 199.872 105.6 271.68l-76.224 76.224A509.568 509.568 0 0 1 0 512a512 512 0 0 1 512-512h323.392L608.576 229.056s-33.792 40.448-56.128 40.448A40.448 40.448 0 0 1 512 229.056V107.776A404.224 404.224 0 0 0 107.776 512z m779.072-347.904A509.568 509.568 0 0 1 1024 512a512 512 0 0 1-512 512H188.608l226.816-229.056s33.792-40.448 56.128-40.448c22.4 0 40.448 18.112 40.448 40.448v121.28A404.224 404.224 0 0 0 916.224 512a402.24 402.24 0 0 0-105.6-271.68l76.224-76.224z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconchange.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconchange) : Iconchange;

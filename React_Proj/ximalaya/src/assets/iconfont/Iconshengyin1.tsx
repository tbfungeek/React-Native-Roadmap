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

const Iconshengyin1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M160 384c19.2 0 32 12.8 32 32v192c0 19.2-12.8 32-32 32S128 627.2 128 608v-192c0-19.2 12.8-32 32-32z"
        fill={getIconColor(color, 0, '#bfbfbf')}
      />
      <Path
        d="M416 320c19.2 0 32 12.8 32 32v320c0 19.2-12.8 32-32 32s-32-12.8-32-32v-320c0-19.2 12.8-32 32-32z"
        fill={getIconColor(color, 1, '#bfbfbf')}
      />
      <Path
        d="M288 192c19.2 0 32 12.8 32 32v576c0 19.2-12.8 32-32 32s-32-12.8-32-32v-576c0-19.2 12.8-32 32-32z"
        fill={getIconColor(color, 2, '#bfbfbf')}
      />
      <Path
        d="M672 256c19.2 0 32 12.8 32 32v448c0 19.2-12.8 32-32 32s-32-12.8-32-32v-448c0-19.2 12.8-32 32-32z"
        fill={getIconColor(color, 3, '#bfbfbf')}
      />
      <Path
        d="M800 128c19.2 0 32 12.8 32 32v704c0 19.2-12.8 32-32 32s-32-12.8-32-32v-704c0-19.2 12.8-32 32-32z"
        fill={getIconColor(color, 4, '#bfbfbf')}
      />
      <Path
        d="M544 0c19.2 0 32 12.8 32 32v960c0 19.2-12.8 32-32 32s-32-12.8-32-32V32c0-19.2 12.8-32 32-32z"
        fill={getIconColor(color, 5, '#bfbfbf')}
      />
      <Path
        d="M32 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
        fill={getIconColor(color, 6, '#bfbfbf')}
      />
      <Path
        d="M928 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
        fill={getIconColor(color, 7, '#bfbfbf')}
      />
    </Svg>
  );
};

Iconshengyin1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconshengyin1) : Iconshengyin1;

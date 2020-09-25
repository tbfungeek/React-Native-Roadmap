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

const Iconshengyin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 958.464c-17.92 0-31.744-14.336-31.744-31.744V97.28c0-17.92 14.336-31.744 31.744-31.744 17.92 0 31.744 14.336 31.744 31.744v829.44c0 17.92-13.824 31.744-31.744 31.744zM316.416 807.936c-17.92 0-31.744-14.336-31.744-31.744v-527.36c0-17.92 14.336-31.744 31.744-31.744S348.16 230.4 348.16 248.32v527.36c0 17.92-14.336 32.256-31.744 32.256zM707.584 807.936c-17.92 0-31.744-14.336-31.744-31.744v-527.36c0-17.92 14.336-31.744 31.744-31.744s31.744 14.336 31.744 31.744v527.36c0.512 17.408-13.824 31.744-31.744 31.744zM903.68 654.336c-17.92 0-31.744-14.336-31.744-31.744v-220.16c0-17.92 14.336-31.744 31.744-31.744s31.744 14.336 31.744 31.744v220.16c0.512 17.408-13.824 31.744-31.744 31.744zM120.32 654.336c-17.92 0-31.744-14.336-31.744-31.744v-220.16c0-17.92 14.336-31.744 31.744-31.744s31.744 14.336 31.744 31.744v220.16c0.512 17.408-13.824 31.744-31.744 31.744z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshengyin.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconshengyin) : Iconshengyin;

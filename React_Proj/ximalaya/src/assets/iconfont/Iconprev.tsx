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

const Iconprev: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M175.522538 562.433155a58.473647 58.473647 0 0 1 0-100.867041l584.736465-448.785237A81.205277 81.205277 0 0 1 836.786388 6.933513 61.689697 61.689697 0 0 1 877.206296 63.214397v897.570475a61.689697 61.689697 0 0 1-40.419908 56.280884 81.205277 81.205277 0 0 1-76.527385-5.847364z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconprev.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconprev) : Iconprev;

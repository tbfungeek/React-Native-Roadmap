/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconyikeapp15 from './Iconyikeapp15';
import Iconfaxian from './Iconfaxian';
import Iconqingting from './Iconqingting';
import Iconshouye from './Iconshouye';
import Iconwode from './Iconwode';

export type IconNames = 'iconyikeapp15' | 'iconfaxian' | 'iconqingting' | 'iconshouye' | 'iconwode';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconyikeapp15':
      return <Iconyikeapp15 key="1" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="2" {...rest} />;
    case 'iconqingting':
      return <Iconqingting key="3" {...rest} />;
    case 'iconshouye':
      return <Iconshouye key="4" {...rest} />;
    case 'iconwode':
      return <Iconwode key="5" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;

/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Icontingdan from './Icontingdan';
import Iconshengyin from './Iconshengyin';
import Iconmore from './Iconmore';
import Iconchange from './Iconchange';
import Iconlike from './Iconlike';
import Iconyikeapp15 from './Iconyikeapp15';
import Iconfaxian from './Iconfaxian';
import Iconqingting from './Iconqingting';
import Iconshouye from './Iconshouye';
import Iconwode from './Iconwode';

export type IconNames = 'icontingdan' | 'iconshengyin' | 'iconmore' | 'iconchange' | 'iconlike' | 'iconyikeapp15' | 'iconfaxian' | 'iconqingting' | 'iconshouye' | 'iconwode';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icontingdan':
      return <Icontingdan key="1" {...rest} />;
    case 'iconshengyin':
      return <Iconshengyin key="2" {...rest} />;
    case 'iconmore':
      return <Iconmore key="3" {...rest} />;
    case 'iconchange':
      return <Iconchange key="4" {...rest} />;
    case 'iconlike':
      return <Iconlike key="5" {...rest} />;
    case 'iconyikeapp15':
      return <Iconyikeapp15 key="6" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="7" {...rest} />;
    case 'iconqingting':
      return <Iconqingting key="8" {...rest} />;
    case 'iconshouye':
      return <Iconshouye key="9" {...rest} />;
    case 'iconwode':
      return <Iconwode key="10" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;

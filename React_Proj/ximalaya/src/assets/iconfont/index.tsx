/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Icondown from './Icondown';
import Iconerji from './Iconerji';
import Iconshengyin1 from './Iconshengyin1';
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

export type IconNames = 'icondown' | 'iconerji' | 'iconshengyin1' | 'icontingdan' | 'iconshengyin' | 'iconmore' | 'iconchange' | 'iconlike' | 'iconyikeapp15' | 'iconfaxian' | 'iconqingting' | 'iconshouye' | 'iconwode';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icondown':
      return <Icondown key="1" {...rest} />;
    case 'iconerji':
      return <Iconerji key="2" {...rest} />;
    case 'iconshengyin1':
      return <Iconshengyin1 key="3" {...rest} />;
    case 'icontingdan':
      return <Icontingdan key="4" {...rest} />;
    case 'iconshengyin':
      return <Iconshengyin key="5" {...rest} />;
    case 'iconmore':
      return <Iconmore key="6" {...rest} />;
    case 'iconchange':
      return <Iconchange key="7" {...rest} />;
    case 'iconlike':
      return <Iconlike key="8" {...rest} />;
    case 'iconyikeapp15':
      return <Iconyikeapp15 key="9" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="10" {...rest} />;
    case 'iconqingting':
      return <Iconqingting key="11" {...rest} />;
    case 'iconshouye':
      return <Iconshouye key="12" {...rest} />;
    case 'iconwode':
      return <Iconwode key="13" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;

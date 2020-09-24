/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconmore from './Iconmore';
import Iconchange from './Iconchange';
import Iconlike from './Iconlike';
import Iconyikeapp15 from './Iconyikeapp15';
import Iconfaxian from './Iconfaxian';
import Iconqingting from './Iconqingting';
import Iconshouye from './Iconshouye';
import Iconwode from './Iconwode';

export type IconNames = 'iconmore' | 'iconchange' | 'iconlike' | 'iconyikeapp15' | 'iconfaxian' | 'iconqingting' | 'iconshouye' | 'iconwode';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconmore':
      return <Iconmore key="1" {...rest} />;
    case 'iconchange':
      return <Iconchange key="2" {...rest} />;
    case 'iconlike':
      return <Iconlike key="3" {...rest} />;
    case 'iconyikeapp15':
      return <Iconyikeapp15 key="4" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="5" {...rest} />;
    case 'iconqingting':
      return <Iconqingting key="6" {...rest} />;
    case 'iconshouye':
      return <Iconshouye key="7" {...rest} />;
    case 'iconwode':
      return <Iconwode key="8" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;

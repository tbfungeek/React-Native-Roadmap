/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconplay1 from './Iconplay1';
import Iconprev from './Iconprev';
import Iconkaishi from './Iconkaishi';
import Iconplay from './Iconplay';
import Iconpause from './Iconpause';
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

export type IconNames = 'iconplay1' | 'iconprev' | 'iconkaishi' | 'iconplay' | 'iconpause' | 'icondown' | 'iconerji' | 'iconshengyin1' | 'icontingdan' | 'iconshengyin' | 'iconmore' | 'iconchange' | 'iconlike' | 'iconyikeapp15' | 'iconfaxian' | 'iconqingting' | 'iconshouye' | 'iconwode';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconplay1':
      return <Iconplay1 key="1" {...rest} />;
    case 'iconprev':
      return <Iconprev key="2" {...rest} />;
    case 'iconkaishi':
      return <Iconkaishi key="3" {...rest} />;
    case 'iconplay':
      return <Iconplay key="4" {...rest} />;
    case 'iconpause':
      return <Iconpause key="5" {...rest} />;
    case 'icondown':
      return <Icondown key="6" {...rest} />;
    case 'iconerji':
      return <Iconerji key="7" {...rest} />;
    case 'iconshengyin1':
      return <Iconshengyin1 key="8" {...rest} />;
    case 'icontingdan':
      return <Icontingdan key="9" {...rest} />;
    case 'iconshengyin':
      return <Iconshengyin key="10" {...rest} />;
    case 'iconmore':
      return <Iconmore key="11" {...rest} />;
    case 'iconchange':
      return <Iconchange key="12" {...rest} />;
    case 'iconlike':
      return <Iconlike key="13" {...rest} />;
    case 'iconyikeapp15':
      return <Iconyikeapp15 key="14" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="15" {...rest} />;
    case 'iconqingting':
      return <Iconqingting key="16" {...rest} />;
    case 'iconshouye':
      return <Iconshouye key="17" {...rest} />;
    case 'iconwode':
      return <Iconwode key="18" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;

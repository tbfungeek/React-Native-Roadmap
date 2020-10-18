/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IcontemplateDelete from './IcontemplateDelete';
import Iconduration from './Iconduration';
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

export type IconNames = 'icontemplate_delete' | 'iconduration' | 'iconplay1' | 'iconprev' | 'iconkaishi' | 'iconplay' | 'iconpause' | 'icondown' | 'iconerji' | 'iconshengyin1' | 'icontingdan' | 'iconshengyin' | 'iconmore' | 'iconchange' | 'iconlike' | 'iconyikeapp15' | 'iconfaxian' | 'iconqingting' | 'iconshouye' | 'iconwode';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icontemplate_delete':
      return <IcontemplateDelete key="1" {...rest} />;
    case 'iconduration':
      return <Iconduration key="2" {...rest} />;
    case 'iconplay1':
      return <Iconplay1 key="3" {...rest} />;
    case 'iconprev':
      return <Iconprev key="4" {...rest} />;
    case 'iconkaishi':
      return <Iconkaishi key="5" {...rest} />;
    case 'iconplay':
      return <Iconplay key="6" {...rest} />;
    case 'iconpause':
      return <Iconpause key="7" {...rest} />;
    case 'icondown':
      return <Icondown key="8" {...rest} />;
    case 'iconerji':
      return <Iconerji key="9" {...rest} />;
    case 'iconshengyin1':
      return <Iconshengyin1 key="10" {...rest} />;
    case 'icontingdan':
      return <Icontingdan key="11" {...rest} />;
    case 'iconshengyin':
      return <Iconshengyin key="12" {...rest} />;
    case 'iconmore':
      return <Iconmore key="13" {...rest} />;
    case 'iconchange':
      return <Iconchange key="14" {...rest} />;
    case 'iconlike':
      return <Iconlike key="15" {...rest} />;
    case 'iconyikeapp15':
      return <Iconyikeapp15 key="16" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="17" {...rest} />;
    case 'iconqingting':
      return <Iconqingting key="18" {...rest} />;
    case 'iconshouye':
      return <Iconshouye key="19" {...rest} />;
    case 'iconwode':
      return <Iconwode key="20" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;

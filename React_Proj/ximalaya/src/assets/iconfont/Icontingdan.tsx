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

const Icontingdan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1264 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 801.306876c0-41.001347 5.418903-76.659037 16.351691-106.886722 10.931555-30.226451 30.63105-58.709923 59.102186-85.505924l0 384.939483c-29.348177-26.001607-49.293145-54.081713-59.739922-84.315566C5.185766 879.31293 0 843.338222 0 801.306876L0 801.306876zM1178.821734 608.912997c25.128266 19.304765 45.464264 45.939173 61.021561 79.925428 15.553596 33.97762 23.292772 71.46217 23.292772 112.469685 0 42.030112-6.062806 77.929574-18.272299 107.68235-12.203325 29.746608-34.218159 58.142499-66.042033 84.870655L1178.821734 608.912997 1178.821734 608.912997zM1029.108038 552.197694c15.947093 0 31.825108 6.385992 47.853614 18.986514 15.878015 12.448798 23.929274 30.075961 23.929274 52.806242l0 325.749716c0 10.130993-2.311638 19.614381-6.941081 28.313244-4.703455 8.854288-10.288885 16.831535-16.988193 24.011921-6.701776 7.016326-14.514963 12.44263-23.291538 16.351691-8.772875 3.751169-16.989427 5.582963-24.568243 5.582963l-88.061801 0c-21.768127 0-40.12184-6.703009-54.794695-20.10286-14.760436-13.554042-22.0173-31.503156-22.0173-54.240839L864.228075 623.987983c0-22.737683 8.216552-40.363612 24.574411-52.807476 16.351691-12.599289 33.739549-18.98528 52.237584-18.98528L1029.108038 552.197694 1029.108038 552.197694zM309.480672 552.197694c24.335106 0 44.108613 5.904914 59.102186 17.627162 15.157633 11.803661 22.655036 30.232619 22.655036 55.43243l0 317.058254c0 25.04932-6.455069 44.903007-19.458956 59.183599-13.003887 14.197945-29.993314 21.378331-50.967047 21.378331l-91.811736 0c-25.123332 0-43.868074-7.655295-55.988753-22.738916-12.126846-14.991106-18.271066-33.496543-18.271066-55.274538L154.740336 625.258521c0-25.202278 7.503571-43.628769 22.653803-55.43243 15.07622-11.644536 33.181992-17.627162 54.081713-17.627162L309.480672 552.198928 309.480672 552.197694zM629.092336 0c66.201159 0 128.738729 11.331219 187.448652 33.978854 58.704989 22.652569 110.145712 54.716982 154.179079 96.275886 44.0309 41.555203 78.564843 91.249245 103.848534 149.074726 25.050554 57.908128 37.730022 121.639757 37.730022 191.272599l-83.026526 0c-20.981134 0-39.882534 0.157892-56.632656 0.64267-16.748888 0.397197-25.1295 0.151724-25.1295-0.64267 0-52.003213-8.779042-98.0275-26.404971-137.827388-17.627162-39.883768-40.919934-73.142239-69.870914-100.027054-29.033627-26.879881-62.61405-46.976573-100.817748-60.460304-38.209866-13.478797-78.564843-20.10286-121.322739-20.10286-41.963502 0-81.755988 8.777809-119.569891 26.404971-37.723855 17.627162-71.062506 41.317131-100.015953 71.069907-28.957148 29.754009-52.167273 63.731629-69.794435 101.941495-17.627162 38.2111-26.406205 77.764281-26.406205 118.924754L147.244166 470.525586c0-69.630376 12.599289-133.360771 37.730022-191.270132 25.123332-57.908128 59.58203-107.599703 103.128152-149.077194 43.546122-41.476257 94.761109-73.622083 153.471032-96.275886C500.277128 11.247339 562.809764 0 629.092336 0L629.092336 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontingdan.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontingdan) : Icontingdan;

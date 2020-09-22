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

const Iconfaxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.003022 1024c-273.039265 0-495.167761-222.140585-495.167761-495.175014 0-273.03322 222.128496-495.161716 495.167761-495.161716 273.028385 0 495.162925 222.128496 495.162925 495.161716C1007.165947 801.860624 785.031407 1024 512.003022 1024L512.003022 1024M512.003022 72.654199c-251.536407 0-456.17804 204.641633-456.17804 456.171996 0 251.537616 204.641633 456.179249 456.17804 456.179249 251.530363 0 456.173204-204.641633 456.173204-456.179249C968.176227 277.295832 763.533385 72.654199 512.003022 72.654199L512.003022 72.654199M512.003022 72.654199"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M873.23338 414.224075c-3.428465-10.770167-12.369553-25.45478-35.474214-34.317289-55.093592-21.166781-148.554318-55.122606-171.366423-63.390332-14.683404-19.67257-75.151804-100.548556-111.64392-147.430033-10.222531-13.163806-26.262331-21.060397-42.888451-21.136558l-0.228484 0c-15.846374 0-30.667594 7.224438-40.645926 19.869622-36.947874 46.794435-99.288874 128.922851-114.226149 148.630479-22.6078 8.131119-115.184813 41.577994-170.729328 62.805221-17.438507 6.674384-29.884221 19.059653-34.99186 34.891521-5.216441 16.025293-2.39243 34.270141 7.734597 50.039145 32.271816 50.41028 88.052068 131.929406 101.877147 152.057735 0.424327 24.626677 2.235272 124.608256 4.597479 184.801025 0.814804 21.403727 7.774491 37.086899 20.620354 46.56716 6.127958 4.511647 15.58525 8.90603 29.226575 8.90603 6.292369 0 13.46966-0.918771 21.597152-3.237457 57.142693-15.97331 151.201828-44.510806 174.513212-51.605891 23.354906 7.341702 117.995526 36.909189 174.437051 52.773697 9.622913 2.662017 19.741478-3.015018 22.43009-12.80476 2.700702-9.798204-2.97996-19.939739-12.670571-22.677917-63.885985-17.960755-177.566916-53.739615-178.700872-54.08778-3.515506-1.133956-7.223229-1.106151-10.703677-0.068908-1.133956 0.360255-114.171748 34.854044-179.027277 53.027568-9.052308 2.510903-16.236852 2.510903-19.62784 0.035058-3.262844-2.411773-5.342167-9.051099-5.710884-18.248476-2.648719-68.321471-4.636165-188.356425-4.644627-189.562916-0.068908-3.656949-1.211326-7.241363-3.265262-10.222531-0.672153-0.953829-67.820982-98.604631-104.379588-155.677207-4.080067-6.389082-5.444924-13.166224-3.690798-18.557956 2.092621-6.442274 8.378946-10.046031 13.295577-11.928301 62.939409-24.062117 173.999426-63.970608 175.130965-64.381637 3.296694-1.189566 6.211372-3.331752 8.358394-6.165434 0.743479-0.990096 75.313798-99.484717 117.052577-152.359962 3.950713-5.003673 9.140558-6.06993 12.22932-6.013111 5.530757 0.004836 11.056678 2.712791 14.404146 7.062444 41.308407 53.094058 113.75951 150.252834 114.460677 151.228424 2.144604 2.871158 5.077416 5.044776 8.410377 6.244013 1.133956 0.424327 113.400464 41.011016 175.836967 65.025986 5.308318 2.022504 11.982702 5.603291 13.750127 11.22109 1.228251 3.811689 0.215186 8.723485-2.675315 13.165015-37.144926 56.888822-106.420226 161.464253-106.440777 161.464253-1.917329 2.911052-2.97996 6.282698-3.076672 9.755893l-2.911052 117.265345c-0.247826 10.187473 7.699539 18.638953 17.760077 18.880735 9.551587-0.17771 18.420141-7.774491 18.670385-17.929324l2.753894-111.938893c13.595386-20.553864 71.014919-107.247119 103.66875-157.241535 9.040219-13.862555 11.559584-30.176777 6.890779-44.742917L873.23338 414.224075 873.23338 414.224075z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconfaxian.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconfaxian) : Iconfaxian;
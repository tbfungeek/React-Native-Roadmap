import React, {useCallback} from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import _ from 'lodash';

const Touchable: React.FC<TouchableOpacityProps> = React.memo(
  ({style, onPress, ...rest}) => {
    const isDisable = rest.disabled;
    const touchableStyle = isDisable ? [style, styles.disabled] : style;
    let throttleOnPress;
    if (typeof onPress === 'function') {
      throttleOnPress = useCallback(
        _.throttle(onPress, 1000, {leading: true, trailing: false}),
        [onPress],
      );
    }
    return (
      <TouchableOpacity
        {...rest}
        onPress={throttleOnPress}
        style={touchableStyle}
        activeOpacity={0.8}
      />
    );
  },
);

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
});

export default Touchable;

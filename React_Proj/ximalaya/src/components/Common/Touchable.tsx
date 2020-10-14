import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

const Touchable: React.FC<TouchableOpacityProps> = React.memo(
  ({style, ...rest}) => {
    const isDisable = rest.disabled;
    const touchableStyle = isDisable ? [style, styles.disabled] : style;
    return (
      <TouchableOpacity {...rest} style={touchableStyle} activeOpacity={0.8} />
    );
  },
);

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
});

export default Touchable;

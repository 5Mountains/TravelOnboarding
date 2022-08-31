import React from 'react';
import {Animated, StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../../../constants';

export const Backdrop = ({scrollX}) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: COLORS.backgrounds.map((_, i) => i * SIZES.width),
    outputRange: COLORS.backgrounds.map(bg => bg),
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, {backgroundColor}]} />
  );
};

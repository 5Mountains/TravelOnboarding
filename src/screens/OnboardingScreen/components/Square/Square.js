import React from 'react';
import {Animated} from 'react-native';

import {styles} from './styles';

import {SIZES} from '../../../../constants';

export const Square = ({scrollX}) => {
  const YOLO = Animated.modulo(
    Animated.divide(
      Animated.modulo(scrollX, SIZES.width),
      new Animated.Value(SIZES.width),
    ),
    1,
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg'],
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -SIZES.height, 0],
  });

  return (
    <Animated.View
      style={[styles.square, {transform: [{rotate}, {translateX}]}]}
    />
  );
};

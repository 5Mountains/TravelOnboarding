import React from 'react';
import {Animated, View} from 'react-native';

import {SIZES} from '../../constants';

import {styles} from './styles';

export const Indicator = ({data, scrollX}) => {
  const {width} = SIZES;

  return (
    <View style={styles.contentContainer}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`indicator-${i}`}
            style={[styles.indicator, {opacity, transform: [{scale}]}]}
          />
        );
      })}
    </View>
  );
};

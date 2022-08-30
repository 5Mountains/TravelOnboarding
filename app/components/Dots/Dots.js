import React, {useMemo} from 'react';
import {Animated, View} from 'react-native';

import {styles} from './styles';

import {SIZES} from '../../constants';

export const Dots = ({data = [], scrollPosition = 0}) => {
  const dotPosition = useMemo(
    () => Animated.divide(scrollPosition, SIZES.width),
    [scrollPosition],
  );

  return (
    <View style={styles.dotsContainer}>
      {data.map((item, index) => {
        const dotOpacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        const dotSize = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [SIZES.base, 17, SIZES.base],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={item.id}
            opacity={dotOpacity}
            style={[styles.dot, {width: dotSize, height: dotSize}]}
          />
        );
      })}
    </View>
  );
};

import {StyleSheet} from 'react-native';

import {SIZES, COLORS} from '../../constants';

export const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
});

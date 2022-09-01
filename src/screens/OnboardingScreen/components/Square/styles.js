import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../../../constants';

export const styles = StyleSheet.create({
  square: {
    position: 'absolute',
    top: -SIZES.height * 0.6,
    left: -SIZES.height * 0.3,

    width: SIZES.height,
    height: SIZES.height,

    borderRadius: 86,

    backgroundColor: COLORS.white,
  },
});

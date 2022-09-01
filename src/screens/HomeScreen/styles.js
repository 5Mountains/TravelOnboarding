import {StyleSheet} from 'react-native';

import {FONTS, COLORS} from '../../constants';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...FONTS.h1,
    color: COLORS.grey,
  },
});

import {StyleSheet} from 'react-native';

import {COLORS, FONTS} from '../../constants/';

export const styles = StyleSheet.create({
  container: {
    minWidth: 120,
    height: 60,
    paddingHorizontal: 20,

    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,

    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.white,
    borderRightWidth: 0,
  },
  buttonText: {
    ...FONTS.h1,

    textAlign: 'left',
    color: COLORS.white,
  },
});

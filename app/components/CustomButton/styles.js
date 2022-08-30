import {StyleSheet} from 'react-native';

import {COLORS, FONTS} from '../../constants/';

export const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 150,
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: COLORS.blue,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  buttonText: {...FONTS.h1, color: COLORS.white},
});

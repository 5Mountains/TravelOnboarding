import {StyleSheet} from 'react-native';

import {FONTS, COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  contentContainer: {
    width: SIZES.width,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: '10%',
    paddingHorizontal: 40,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.grey,
    textAlign: 'center',
  },
  description: {
    ...FONTS.body3,
    color: COLORS.grey,
    textAlign: 'center',
    marginTop: SIZES.base,
  },
});

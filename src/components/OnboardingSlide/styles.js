import {StyleSheet} from 'react-native';

import {FONTS, COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  contentContainer: {
    width: SIZES.width,
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    flex: 0.6,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  image: {
    width: SIZES.width / 1.25,
    height: SIZES.width / 1.25,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 0.4,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.white,
    fontWeight: '800',
    marginBottom: 10,
  },
  description: {
    ...FONTS.text,
    color: COLORS.white,
    fontWeight: '300',
  },
});

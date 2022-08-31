import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  black: '#000000',
  white: '#ffffff',
  grey: '#6a6a6a',
  backgrounds: ['#72a000', '#57b697', '#8ac414'],
};

export const SIZES = {
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,

  text: 16,

  width,
  height,
};

export const FONTS = {
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  text: {fontFamily: 'Roboto-Regular', fontSize: SIZES.text, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;

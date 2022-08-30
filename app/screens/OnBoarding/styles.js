import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '30%' : '20%',
  },
  buttonContainer: {
    width: '100%',
  },
});

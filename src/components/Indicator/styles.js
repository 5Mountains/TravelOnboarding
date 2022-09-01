import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    margin: 10,
  },
});

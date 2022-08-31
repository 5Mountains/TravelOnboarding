import React from 'react';
import {Pressable, Text} from 'react-native';

import {styles} from './styles';

export const CustomButton = ({text = '', onPress = () => {}}) => (
  <Pressable style={styles.container} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </Pressable>
);

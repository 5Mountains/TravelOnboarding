import React from 'react';
import {Pressable, Text} from 'react-native';

import {styles} from './styles';

export const CustomButton = ({completed = false, onPress = () => {}}) => (
  <Pressable style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.buttonText}>{completed ? "Let's Go" : 'Skip'}</Text>
  </Pressable>
);

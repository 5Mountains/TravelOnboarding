import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

export const OnboardingSlide = ({item}) => (
  <View style={styles.contentContainer}>
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </View>
);

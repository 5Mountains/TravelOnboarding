import React, {useState, useEffect} from 'react';
import {Animated, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {OnBoardingPage} from '../../components/OnBoardingPage';
import {CustomButton} from '../../components/CustomButton';
import {Dots} from '../../components/Dots';

import {data} from '../../assets/data/data';

import {theme} from '../../constants';

import {styles} from './styles';

const {SIZES} = theme;

export const OnBoarding = () => {
  const [completed, setCompleted] = useState(false);
  const [scrollPosition] = useState(new Animated.Value(0));

  useEffect(() => {
    scrollPosition.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === data.length - 1) {
        setCompleted(true);
      }
    });

    return () => {
      scrollPosition.removeListener();
    };
  }, [scrollPosition]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <OnBoardingPage {...{data, scrollPosition}} />

      <View style={styles.dotsContainer}>
        <Dots {...{data, scrollPosition}} />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton completed={completed} />
      </View>
    </SafeAreaView>
  );
};

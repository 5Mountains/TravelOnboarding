import React from 'react';
import {Alert, View} from 'react-native';

import {Indicator} from '../../../../components/Indicator';
import {CustomButton} from '../../../../components/CustomButton';

import {useNavigation} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';

import {styles} from './styles';

export const BottomNavigationBlock = ({
  data,
  scrollX,
  currentPage,
  flatlistRef,
}) => {
  const navigation = useNavigation();
  const isLastSlide = currentPage === data.length - 1;

  const handleNext = () => {
    if (currentPage !== data.length - 1) {
      flatlistRef.current.scrollToIndex({
        animated: true,
        index: currentPage + 1,
      });
    }
  };

  const handleGetStarted = () => {
    try {
      EncryptedStorage.setItem('isAppFirstLaunched', 'true');
      navigation.replace('HomeScreen');
    } catch (e) {
      Alert.alert(e, e.message);
    }
  };

  return (
    <View style={styles.contentContainer}>
      <Indicator data={data} scrollX={scrollX} />
      {isLastSlide ? (
        <CustomButton text={'Get Started'} onPress={handleGetStarted} />
      ) : (
        <CustomButton text={'Next'} onPress={handleNext} />
      )}
    </View>
  );
};

export default BottomNavigationBlock;

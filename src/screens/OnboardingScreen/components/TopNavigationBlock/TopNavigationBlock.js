import React from 'react';
import {Text, Pressable} from 'react-native';

import {styles} from './styles';

export const TopNavigationBlock = ({currentPage, dataLength, flatlistRef}) => {
  const isNotStartedPage = currentPage !== 0;
  const isNotLastPage = currentPage !== dataLength - 1;

  const handleBack = () => {
    if (currentPage !== 0) {
      flatlistRef.current.scrollToIndex({
        animated: true,
        index: currentPage - 1,
      });
    }
  };

  const handleSkip = () => {
    flatlistRef.current.scrollToIndex({
      animate: true,
      index: dataLength - 1,
    });
  };

  return (
    <>
      {isNotStartedPage && (
        <Pressable style={styles.leftButton} onPress={handleBack}>
          <Text>Back</Text>
        </Pressable>
      )}
      {isNotLastPage && (
        <Pressable style={styles.rightButton} onPress={handleSkip}>
          <Text>Skip</Text>
        </Pressable>
      )}
    </>
  );
};

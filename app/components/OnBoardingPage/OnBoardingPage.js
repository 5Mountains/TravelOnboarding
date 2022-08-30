import React, {useMemo} from 'react';
import {Animated, View, Text, Image} from 'react-native';
import {styles} from './styles';

export const OnBoardingPage = ({data = [], scrollPosition = 0}) => {
  const onScroll = useMemo(
    () =>
      Animated.event([{nativeEvent: {contentOffset: {x: scrollPosition}}}], {
        useNativeDriver: false,
      }),
    [scrollPosition],
  );

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEnabled
      snapToAlignment="center"
      decelerationRate={0}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}>
      {data.map((item, _) => (
        <View key={item.id} style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image source={item.img} resizeMode="cover" style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
};

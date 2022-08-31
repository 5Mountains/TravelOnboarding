import React, {useState, useEffect, useRef} from 'react';
import {Animated, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {OnboardingSlide} from '../../components/OnboardingSlide';
import {
  Square,
  Backdrop,
  TopNavigationBlock,
  BottomNavigationBlock,
} from './components';

import {styles} from './styles';

import {data} from '../../data/data';

export const OnboardingScreen = () => {
  const flatlistRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);

  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    setViewableItems(viewableItems);
  });

  const keyExtractor = item => item?.id;
  const renderItem = ({item}) => <OnboardingSlide item={item} />;

  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) {
      return;
    }
    setCurrentPage(viewableItems[0].index);
  }, [currentPage, viewableItems]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar hidden />

      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />

      <Animated.FlatList
        ref={flatlistRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        initialNumToRender={1}
      />

      <TopNavigationBlock
        currentPage={currentPage}
        dataLength={data.length}
        flatlistRef={flatlistRef}
      />
      <BottomNavigationBlock {...{data, scrollX, currentPage, flatlistRef}} />
    </SafeAreaView>
  );
};

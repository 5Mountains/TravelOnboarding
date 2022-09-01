import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {HomeScreen, OnboardingScreen} from '../../src/screens';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EncryptedStorage from 'react-native-encrypted-storage';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const firstLaunch = await EncryptedStorage.getItem(
          'isAppFirstLaunched',
        );
        if (firstLaunch === null || firstLaunch === undefined) {
          setIsAppFirstLaunched(true);
        } else {
          setIsAppFirstLaunched(false);
        }
      } catch (e) {
        Alert.alert(e, e.message);
      }
    })();
  }, []);

  return (
    isAppFirstLaunched !== null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AboutScreen } from '@/screens/AboutScreen';
import { HomeScreen } from '@/screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="About" component={AboutScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

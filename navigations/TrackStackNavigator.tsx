import React, { VFC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { TrackHomeScreen } from '../screens/TrackHomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TrackStackNavigator: VFC = () => {
  return (
    <Stack.Navigator
      initialRouteName="TrackHome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TrackHome" component={TrackHomeScreen} />
    </Stack.Navigator>
  );
};

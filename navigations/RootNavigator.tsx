import React, { VFC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { useAuthState } from '../hooks/useAuthState';
import { TagStackNavigator } from './TagStackNavigator';
import { AuthStackNavigator } from './AuthStackNavigator';

export const RootNavigator: VFC = () => {
  const { user, isLoading } = useAuthState();
  const tw = useTailwind();

  if (isLoading) {
    return (
      <SafeAreaView style={tw('flex-1 items-center justify-center')}>
        <ActivityIndicator size="large" color="gray" />
      </SafeAreaView>
    );
  }
  return (
    <NavigationContainer>
      {user?.uid ? <TagStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

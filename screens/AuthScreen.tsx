import React, { VFC } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { InputField } from '../components/InputField';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AuthScreen: VFC = ({}) => {
  const tw = useTailwind();
  const {
    isLogin,
    email,
    password,
    login,
    register,
    setEmail,
    setPassword,
    toggleMode,
    authErr,
  } = useFirebaseAuth();

  return (
    <SafeAreaView
      style={[tw('flex-1 pt-16 items-center'), { backgroundColor: '#2e3963' }]}
    >
      <Ionicons name="pencil" size={50} color="white" />
      <Text style={tw('text-2xl text-white font-semibold mt-2 mb-5')}>
        {isLogin ? 'Login' : 'Sign up'}
      </Text>
      <InputField
        leftIcon="email"
        placeholder="Enter email"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus
        value={email}
        onChangeText={(text: string) => setEmail(text)}
      />
      <InputField
        leftIcon="email"
        placeholder="Enter password"
        textContentType="password"
        autoFocus
        value={password}
        onChangeText={(text: string) => setPassword(text)}
      />
      {authErr !== '' && (
        <Text style={tw('text-red-500 my-3 font-semibold')}>{authErr}</Text>
      )}
      <Button
        onPress={isLogin ? login : register}
        title={isLogin ? 'Login' : 'Register'}
      />
      <Text style={tw('text-white')}>
        {isLogin ? 'Create new account ?' : 'Login ?'}
      </Text>
      <IconButton name="retweet" size={24} color="#fff" onPress={toggleMode} />
    </SafeAreaView>
  );
};

import React, { VFC } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
  leftIcon: any;
  iconColor?: string;
  placeholder: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean | undefined;
  keyboardType?: 'email-address' | 'default';
  textContentType?: 'emailAddress' | 'password' | 'name';
  autoFocus?: boolean | undefined;
  value: string;
  onChangeText: (txt: string) => void;
};

export const InputField: VFC<Props> = ({
  leftIcon,
  iconColor = 'gray',
  placeholder,
  placeholderTextColor = 'gray',
  secureTextEntry = false,
  keyboardType = 'default',
  textContentType = 'name',
  autoFocus = false,
  value,
  onChangeText,
}) => {
  const tw = useTailwind();

  return (
    <View style={tw('mb-5 mx-3 flex-row p-3 w-11/12 bg-white rounded')}>
      {leftIcon ? (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color={iconColor}
          style={tw('mr-3')}
        />
      ) : null}
      <TextInput
        style={tw('w-full')}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
        autoCapitalize="none"
        autoFocus={autoFocus}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

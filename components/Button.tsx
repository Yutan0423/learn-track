import React, { VFC } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

type Props = {
  name: string;
  bgColor?: string;
  titleColor?: string;
  onPress: (e: GestureResponderEvent) => void;
};

export const Button: VFC<Props> = ({
  name,
  bgColor = 'bg-gray-500',
  titleColor = 'text-white',
  onPress,
}) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity
      style={tw(`mb-4 mx-3 rounded-3xl w-11/12 ${bgColor}`)}
      onPress={onPress}
    >
      <Text style={tw(`text-center text-lg font-semibold p-2 ${titleColor}`)}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

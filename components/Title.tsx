import React, { VFC } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { View, Text } from 'react-native';

type Props = {
  first: string;
  last: string;
};

export const Title: VFC<Props> = ({ first, last }) => {
  const tw = useTailwind();

  return (
    <View style={tw('flex-row my-6 px-1')}>
      <View
        style={[
          tw('flex-1 mr-1 border self-center'),
          { borderColor: '#2e3963' },
        ]}
      />
      <Text style={tw('text-gray-700 text-3xl font-extrabold')}>
        {`${first}`}
        <Text style={[tw('font-light'), { color: '#2e3963' }]}>{last}</Text>
      </Text>
      <View
        style={[
          tw('flex-1 mr-1 border self-center'),
          { borderColor: '#2e3963' },
        ]}
      />
    </View>
  );
};

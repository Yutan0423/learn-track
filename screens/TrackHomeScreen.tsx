import { View, Text, SafeAreaView } from 'react-native';
import React, { useState, VFC } from 'react';
import { Button } from '../components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { useTailwind } from 'tailwind-rn/dist';
import { Title } from '../components/Title';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TrackHome'>;
};

export const TrackHomeScreen: VFC<Props> = ({ navigation }) => {
  const tw = useTailwind();
  const HOUR_IN_SEC = 3600;
  const MIN_IN_SEC = 60;
  const [second, SetSecond] = useState(0);
  const [time, setTime] = useState('00:00:00');

  const timeToSec = (time: string): number => {
    const [h, m, s] = time.split(':').map((e) => parseInt(e));
    if (s === undefined) return 0;
    return h * HOUR_IN_SEC + m * MIN_IN_SEC + s;
  };

  const secToTime = (s: number): string => {
    return new Date(s * 1000).toISOString().slice(11, 8);
  };

  const countDownInner = (): void => {
    SetSecond(second - 1);
  };

  return (
    <SafeAreaView style={tw('flex-1 bg-gray-100 items-center')}>
      <Title first="Learn" last="Tracker" />
      <View
        style={[
          tw(
            'my-2 mx-2 items-center border-indigo-500 border-l-4 bg-white w-11/12 h-36',
          ),
          {
            shadowColor: 'black',
            shadowOffset: {
              width: 4,
              height: 4,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2,
          },
        ]}
      >
        <Text>{time}</Text>
      </View>
      <Button
        name="Start"
        bgColor="bg-purple-600"
        onPress={() => navigation.goBack()}
      />
      <Button
        name="Stop"
        bgColor="bg-purple-600"
        onPress={() => navigation.goBack()}
      />
      <Button
        name="Reset"
        bgColor="bg-purple-600"
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

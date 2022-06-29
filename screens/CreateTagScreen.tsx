import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { VFC } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { useCreateTag } from '../hooks/useCreateTag';
import { InputField } from '../components/InputField';
import { IconButton } from '../components/IconButton';
import { Title } from '../components/Title';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTag'>;
};

export const CreateTagScreen: VFC<Props> = ({ navigation }) => {
  const tw = useTailwind();
  const { createErr, name, setName, createTag } = useCreateTag({ navigation });

  return (
    <SafeAreaView style={tw('flex-1 bg-gray-100 items-center')}>
      <View style={tw('flex-row px-4 justify-between w-full')}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={25} color="gray" />
        </TouchableOpacity>
        <View />
      </View>
      <Title first="New" last="Tag" />
      <InputField
        leftIcon="tag"
        placeholder="Tag name"
        autoFocus
        value={name}
        onChangeText={(text: string) => setName(text)}
      />
      <IconButton name="plus" size={20} color="gray" onPress={createTag} />
      {createErr !== '' && (
        <Text style={tw('text-red-500 my-3 font-semibold')}>{createErr}</Text>
      )}
    </SafeAreaView>
  );
};

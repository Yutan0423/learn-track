import { View, Text } from 'react-native';
import React, { VFC } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { useTailwind } from 'tailwind-rn/dist';
import { AntDesign } from '@expo/vector-icons';
import { useCreateTask } from '../hooks/useCreateTask';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Title } from '../components/Title';
import { IconButton } from '../components/IconButton';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTask'>;
};

export const CreateTaskScreen: VFC<Props> = ({ navigation }) => {
  const tw = useTailwind();
  const { createErr, editedtask, createTask, onChangeTask, resetInput } =
    useCreateTask({ navigation });

  return (
    <SafeAreaView style={tw('flex-1 bg-gray-100')}>
      <View>
        <TouchableOpacity
          onPress={() => {
            resetInput();
            navigation.goBack();
          }}
        >
          <AntDesign name="close" size={25} color="gray" />
        </TouchableOpacity>
        <View />
      </View>
      <Title first="New" last="Task" />
      <View style={tw('mb-5 mx-1 items-center')}>
        <TextInput
          style={tw('w-5/6')}
          autoFocus
          multiline
          placeholder="New Task ?"
          value={editedtask.title}
          onChangeText={(text: string) => onChangeTask(text)}
        />
      </View>
      <IconButton name="plus" size={20} color="gray" onPress={createTask} />
      {createErr !== '' && (
        <Text style={tw('text-red-500 my-3 font-semibold')}>{createErr}</Text>
      )}
    </SafeAreaView>
  );
};

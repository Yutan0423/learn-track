import React, { VFC } from 'react';
import { View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RootStackParamList } from '../types/types';
import { useEditTask } from '../hooks/useEditTask';
import { Title } from '../components/Title';
import { IconButton } from '../components/IconButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTailwind } from 'tailwind-rn/dist';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EditTask'>;
};

export const EditTaskScreen: VFC<Props> = ({ navigation }) => {
  const tw = useTailwind();
  const { updateErr, editedtask, updateTask, onChangeTask, resetInput } =
    useEditTask({ navigation });

  return (
    <SafeAreaView style={tw('flex-1 bg-gray-100')}>
      <View>
        <TouchableOpacity
          style={tw('flex-row px-4 justify-between w-full')}
          onPress={() => {
            resetInput();
            navigation.goBack();
          }}
        >
          <AntDesign name="close" size={25} color="gray" />
        </TouchableOpacity>
        <View />
      </View>
      <Title first="Edit" last="Task" />
      <View style={tw('mb-5 mx-1 items-center')}>
        <TextInput
          style={tw('w-5/6')}
          autoCapitalize="none"
          autoFocus
          multiline
          placeholder="Edit Task?"
          value={editedtask.title}
          onChangeText={(text: string) => onChangeTask(text)}
        />
      </View>
      <IconButton name="edit" size={20} color="gray" onPress={updateTask} />
    </SafeAreaView>
  );
};

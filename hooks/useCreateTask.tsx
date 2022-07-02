import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { db } from '../firebaseConfig';
import { selectUser } from '../slices/userSlice';
import { RootStackParamList } from '../types/types';
import {
  resetEditedTask,
  setEditedTask,
  selectEditedTask,
  selectTag,
} from '../slices/todoSlice';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTask'>;
};

export const useCreateTask = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const editedtask = useSelector(selectEditedTask);
  const tag = useSelector(selectTag);
  const [createErr, setCreateErr] = useState('');
  const resetInput = () => {
    dispatch(resetEditedTask());
  };
  const onChangeTask = async (text: string) => {
    dispatch(setEditedTask({ ...editedtask, title: text }));
  };
  const createTask = async () => {
    if (editedtask?.title !== '') {
      setCreateErr('');
      try {
        await addDoc(
          collection(db, 'users', user.uid, 'tags', tag.id, 'tasks'),
          {
            title: editedtask.title,
            completed: false,
            createdAt: serverTimestamp(),
          },
        );
        dispatch(resetEditedTask());
        navigation.goBack();
      } catch (err: any) {
        dispatch(resetEditedTask());
        setCreateErr('Failed to create task');
        console.log(err.message);
      }
    }
  };

  return {
    onChangeTask,
    editedtask,
    createErr,
    createTask,
    resetInput,
  };
};

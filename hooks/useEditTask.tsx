import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDoc, doc } from 'firebase/firestore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { db } from '../firebaseConfig';
import { RootStackParamList } from '../types/types';
import { selectUser } from '../slices/userSlice';
import {
  resetEditedTask,
  setEditedTask,
  selectEditedTask,
  selectTag,
} from '../slices/todoSlice';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EditTask'>;
};

export const useEditTask = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const tag = useSelector(selectTag);
  const editedtask = useSelector(selectEditedTask);
  const [updateErr, setUpdateErr] = useState('');

  const resetInput = () => {
    dispatch(resetEditedTask());
  };
  const onChangeTask = (text: string) => {
    dispatch(setEditedTask({ ...editedtask, title: text }));
  };
};

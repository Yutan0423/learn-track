import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, Tag } from '../types/types';
import type { RootState } from '../store';

type State = {
  editedTask: Omit<Task, 'completed' | 'createdAt'>;
  selectedTag: Omit<Tag, 'createdAt'>;
};
const initialState: State = {
  editedTask: { id: '', title: '' },
  selectedTag: { id: '', name: '' },
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setEditedTask: (
      state,
      action: PayloadAction<Omit<Task, 'completed' | 'createdAt'>>,
    ) => {
      state.editedTask = action.payload;
    },
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask;
    },
    setSelectedTag: (state, action: PayloadAction<Omit<Tag, 'createdAt'>>) => {
      state.selectedTag = action.payload;
    },
  },
});

export const { setEditedTask, resetEditedTask, setSelectedTag } =
  todoSlice.actions;
export const selectEditedTask = (state: RootState) => state.todo.editedTask;
export const selectTag = (state: RootState) => state.todo.selectedTag;
export default todoSlice.reducer;

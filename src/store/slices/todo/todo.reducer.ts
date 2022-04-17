import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from './types';
import { initialState } from './constants';

const todoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<ITodo>) => {
      state.todos.push(payload);
    },
    deleteTodo: (state, { payload }: PayloadAction<ITodo['id']>) => {
      const index = state.todos.findIndex((todo) => todo.id === payload);

      if (index !== -1) state.todos.splice(index, 1);
    },
    updateTodo: (state, { payload }: PayloadAction<ITodo>) => {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);

      if (index !== -1) state.todos[index] = payload;
    },
  },
});

export default todoReducer.reducer;

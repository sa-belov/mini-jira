import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from './types';
import { initialState } from './constants';

const todoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<ITodo>) => {
      payload.id = Date.now();
      payload.date = Date.now().toLocaleString();
      state.todos.push(payload);
    },
    deleteTodo: (state, { payload }: PayloadAction<ITodo['id']>) => {
      const index = state.todos.findIndex((todo) => todo.id === payload);

      if (index !== -1) state.todos.splice(index, 1);
    },
    selectTodo: (state, { payload }: PayloadAction<ITodo['id']>) => {
      const foundTodo = state.todos.find((todo) => todo.id === payload);
      if (!foundTodo) return state;

      return { ...state, selectedTodo: foundTodo };
    },
    updateTodo: (state, { payload }: PayloadAction<ITodo>) => {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);

      if (index === -1) return;

      return {
        ...state,
        todos: [...state.todos.slice(0, index), payload, ...state.todos.slice(index + 1)],
      };
    },
  },
});

export const { updateTodo, deleteTodo, addTodo, selectTodo } = todoReducer.actions;
export default todoReducer.reducer;

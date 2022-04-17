import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todo/todo.reducer';
import { RootStore } from './types';

export const store = configureStore<RootStore>({
  reducer: {
    todo: todoReducer,
  },
});

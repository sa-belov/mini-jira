import { ITodoState } from './types';

export const initialState: ITodoState = {
  todos: [
    {
      id: 1,
      text: 'First todo',
      priority: 'light',
      progress: 'done',
      date: Date.now().toLocaleString(),
    },
    {
      id: 2,
      text: 'Second todo',
      priority: 'high',
      progress: 'todo',
      date: Date.now().toLocaleString(),
    },
    {
      id: 3,
      text: 'Third todo',
      priority: 'medium',
      progress: 'inProgress',
      date: Date.now().toLocaleString(),
    },
  ],
  selectedTodo: null,
};

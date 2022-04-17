import { ITodoState } from './types';

export const initialState: ITodoState = {
  todos: [
    {
      id: Date.now(),
      text: 'First todo',
      priority: 'light',
      progress: 'done',
      date: new Date(),
    },
    {
      id: Date.now(),
      text: 'Second todo',
      priority: 'high',
      progress: 'todo',
      date: new Date(),
    },
    {
      id: Date.now(),
      text: 'Third todo',
      priority: 'medium',
      progress: 'inProgress',
      date: new Date(),
    },
    {
      id: Date.now(),
      text: 'Fourth todo',
      priority: 'light',
      progress: 'done',
      date: new Date(),
    },
    {
      id: Date.now(),
      text: 'Fifth todo',
      priority: 'high',
      progress: 'inProgress',
      date: new Date(),
    },
    {
      id: Date.now(),
      text: 'Sixth todo',
      priority: 'medium',
      progress: 'todo',
      date: new Date(),
    },
  ],
};

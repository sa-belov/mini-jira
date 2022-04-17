import { ITodo } from '../../store/slices/todo/types';

export interface IState {
  draftTodo: ITodo;
  inputMode: 'todoCreate' | 'todoEdit';
  error: boolean;
}

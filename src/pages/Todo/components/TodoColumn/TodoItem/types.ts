import { ITodo } from '../../../../../store/slices/todo/types';

export interface ITodoItemProps {
  todo: ITodo;
  handleOrderEditStart: (id: ITodo['id']) => void;
}

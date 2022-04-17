import { ITodo } from '../../../../store/slices/todo/types';

export interface ITodoColumnProps {
  todos: ITodo[];
  heading: string;
  handleOrderEditStart: (id: ITodo['id']) => void;
}

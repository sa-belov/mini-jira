export interface ITodo {
  id: number;
  text: string;
  progress: 'todo' | 'inProgress' | 'done';
  priority: 'light' | 'medium' | 'high';
  date: Date;
}

export interface ITodoState {
  todos: ITodo[];
}

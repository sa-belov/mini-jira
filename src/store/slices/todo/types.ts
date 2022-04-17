export interface ITodo {
  id: number;
  text: string;
  progress: 'todo' | 'inProgress' | 'done' | '';
  priority: 'light' | 'medium' | 'high' | '';
  date: string;
}

export interface ITodoState {
  todos: ITodo[];
  selectedTodo: ITodo | null;
}

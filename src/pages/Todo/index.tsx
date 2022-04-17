import Button from '../../shared/ui-kit/Button';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store/types';

const Todo = () => {
  const { todos } = useSelector((state: RootStore) => state.todo);
  return (
    <div>
      <Button styleType="primary">Create todo</Button>
      {todos.map((todo) => (
        <div>{todo.text}</div>
      ))}
    </div>
  );
};

export default Todo;

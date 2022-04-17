import { FC } from 'react';
import { ITodoColumnProps } from './types';
import styles from './todoColumns.module.sass';
import TodoItem from './TodoItem';

const TodoColumn: FC<ITodoColumnProps> = ({ todos, heading, handleOrderEditStart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span>{heading}</span>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleOrderEditStart={handleOrderEditStart} />
        ))}
      </div>
    </div>
  );
};

export default TodoColumn;

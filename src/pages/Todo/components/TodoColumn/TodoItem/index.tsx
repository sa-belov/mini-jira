import { FC } from 'react';
import { ITodoItemProps } from './types';
import styles from '../todoColumns.module.sass';
import { ReactComponent as CloseIcon } from '../../../../../assets/images/svg/close.svg';
import { deleteTodo } from '../../../../../store/slices/todo/todo.reducer';
import { ReactComponent as EditIcon } from '../../../../../assets/images/svg/edit.svg';
import { useDispatch } from 'react-redux';

const TodoItem: FC<ITodoItemProps> = ({ todo, handleOrderEditStart }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.todo} ${
        todo.priority === 'light' ? styles.green : todo.priority === 'medium' ? styles.yellow : styles.red
      }`}
    >
      <span>{todo.text}</span>
      <div className={styles.icons}>
        <CloseIcon className={styles.closeIcon} onClick={() => dispatch(deleteTodo(todo.id))} />
        <EditIcon className={styles.editIcon} onClick={() => handleOrderEditStart(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItem;

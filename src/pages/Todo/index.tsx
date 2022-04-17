import Button from '../../shared/ui-kit/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store/types';
import TodoColumn from './components/TodoColumn';
import styles from './todo.module.sass';
import Input from '../../shared/ui-kit/Input';
import { useCallback, useEffect, useState } from 'react';
import Dropdown from '../../shared/ui-kit/Dropdown';
import { ITodo } from '../../store/slices/todo/types';
import { addTodo, selectTodo, updateTodo } from '../../store/slices/todo/todo.reducer';
import { IState } from './types';

const emptyState: ITodo = { text: '', priority: '', progress: '', date: '', id: -1 };

const Todo = () => {
  const [state, setState] = useState<IState>({
    draftTodo: emptyState,
    inputMode: 'todoCreate',
    error: false,
  });
  const { todos, selectedTodo } = useSelector((state: RootStore) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedTodo) return;

    setState((prev) => ({ ...prev, draftTodo: selectedTodo }));
  }, [selectedTodo]);

  const handleChange = (value: string, name: string) => {
    setState((prev) => ({
      ...prev,
      draftTodo: { ...prev.draftTodo, [name]: value },
    }));
  };

  const createTodo = () => {
    if (state.draftTodo.text === '' || state.draftTodo.priority === '' || state.draftTodo.progress === '')
      setState((prev) => ({
        ...prev,
        error: true,
      }));
    else {
      dispatch(addTodo({ ...state.draftTodo }));
      setState((prev) => ({
        ...prev,
        draftTodo: emptyState,
        error: false,
      }));
    }
  };

  const handleOrderEditStart = useCallback(
    (id: ITodo['id']) => {
      setState((prev) => ({ ...prev, inputMode: 'todoEdit' }));
      dispatch(selectTodo(id));
    },
    [dispatch]
  );

  const handleBookEditSave = () => {
    dispatch(updateTodo({ ...state.draftTodo }));
    setState((prev) => ({
      ...prev,
      inputMode: 'todoCreate',
      draftTodo: emptyState,
    }));
  };

  const renderSubmitButton = () => {
    const callback = state.inputMode === 'todoCreate' ? createTodo : handleBookEditSave;
    const text = state.inputMode === 'todoCreate' ? 'Create todo' : 'Save';

    return (
      <Button styleType="primary" onClick={callback}>
        {text}
      </Button>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.fields}>
          <Input placeholder="Write todo" name="text" value={state.draftTodo.text} onChange={handleChange} />
          <Dropdown
            value={state.draftTodo.priority}
            options={['light', 'medium', 'high']}
            onChange={handleChange}
            name="priority"
          />
          <Dropdown
            value={state.draftTodo.progress}
            options={['todo', 'inProgress', 'done']}
            onChange={handleChange}
            name="progress"
          />
        </div>
        <div>
          {renderSubmitButton()}
          {state.error && <span className={styles.error}>Fill in all the fields</span>}
        </div>
      </div>
      <div className={styles.columns}>
        <TodoColumn
          handleOrderEditStart={handleOrderEditStart}
          heading="Todo"
          todos={todos.filter((todo) => todo.progress === 'todo')}
        />
        <TodoColumn
          handleOrderEditStart={handleOrderEditStart}
          heading="In progress"
          todos={todos.filter((todo) => todo.progress === 'inProgress')}
        />
        <TodoColumn
          handleOrderEditStart={handleOrderEditStart}
          heading="Done"
          todos={todos.filter((todo) => todo.progress === 'done')}
        />
      </div>
    </div>
  );
};

export default Todo;

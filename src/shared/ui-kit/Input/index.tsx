import { ChangeEvent, HTMLProps } from 'react';
import styles from './input.module.sass';

interface IProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  onChange: (value: string, name: string) => void;
}

const Input = ({ onChange, ...props }: IProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, e.target.name);
  };

  return <input className={styles.input} {...props} onChange={handleChange} />;
};

export default Input;

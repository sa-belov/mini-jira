import styles from './button.module.sass';
import { FC } from 'react';
import { IButtonProps } from './types';
import cn from 'classnames';

const Button: FC<IButtonProps> = ({ children, styleType, ...props }) => {
  const buttonCN = cn({
    [styles.button]: true,
    [styles[styleType] || '']: Boolean(styleType),
  });

  return (
    <button className={buttonCN} {...props}>
      {children}
    </button>
  );
};

export default Button;

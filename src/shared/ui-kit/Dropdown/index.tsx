import { useRef, useState } from 'react';
import styles from './dropdown.module.sass';
import { ReactComponent as ArrowTop } from '../../../assets/images/svg/arrow-top.svg';
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface IProps {
  value: string;
  options: string[];
  onChange: (val: string, name: string) => void;
  name: string;
}

const Dropdown = ({ value, options, onChange, name }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useOnClickOutside(ref, () => setOpen(false));

  const handleClick = (option: string) => {
    setOpen(false);
    onChange(option, name);
  };

  const renderOptions = () => {
    const dropdownOptions = options.map((option) => (
      <div key={option} onClick={() => handleClick(option)} className={styles.dropdownOption}>
        {option}
      </div>
    ));

    return <div className={styles.dropdownOptions}>{dropdownOptions}</div>;
  };

  return (
    <div ref={ref} className={styles.dropdown}>
      <div onClick={() => setOpen(!open)} className={styles.dropdownSelectedOption}>
        {value === '' ? 'Выберите значение' : value}
        <ArrowTop style={open ? { transform: 'rotate(-180deg)' } : {}} />
      </div>
      {open && renderOptions()}
    </div>
  );
};

export default Dropdown;

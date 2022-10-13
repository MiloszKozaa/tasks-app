import { InputTypes } from '../types/App.types';
import '../styles/Input.css'

const Input = ({ value, style, pleaceholder, onInputChange, onEnterPress }: InputTypes) => {
  return (
    <input
    placeholder={pleaceholder}
      type='text'
      value={value}
      className={style}
      onChange={onInputChange}
      onKeyPress={onEnterPress}
    />
  );
};

export default Input;

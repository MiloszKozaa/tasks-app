import { InputTypes } from '../Interfaces';

const Input = ({ value, onInputChange, onEnterPress }: InputTypes) => {
  return (
    <input
      type='text'
      value={value}
      onChange={onInputChange}
      onKeyPress={onEnterPress}
    />
  );
};

export default Input;

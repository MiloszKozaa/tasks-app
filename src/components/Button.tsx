import { ButtonTypes } from '../Interfaces';

const Button = ({ name, onButtonClick, style }: ButtonTypes) => {
  return (
    <button className={style} onClick={onButtonClick}>
      {name}
    </button>
  );
};

export default Button;

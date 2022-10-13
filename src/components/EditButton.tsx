import { ButtonTypes } from '../types/App.types';
import '../styles/Button.css';

const EditButton = ({ editMode, onButtonClick }: ButtonTypes) => {
  return (
    <button
      className={editMode ? 'EditButton_active' : 'EditButton'}
      onClick={onButtonClick}>
      <svg
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M2.04638 22.9536H3.54707L18.6562 7.84447L17.1555 6.34379L2.04638 21.4529V22.9536ZM22.9877 6.3779L18.6221 2.01228L20.0546 0.579809C20.4411 0.19327 20.9186 0 21.487 0C22.0555 0 22.533 0.19327 22.9195 0.579809L24.4202 2.08049C24.8067 2.46703 25 2.94452 25 3.51296C25 4.0814 24.8067 4.55889 24.4202 4.94543L22.9877 6.3779ZM21.5552 7.81037L4.36562 25H0V20.6344L17.1896 3.44475L21.5552 7.81037ZM17.9059 7.09413L17.1555 6.34379L18.6562 7.84447L17.9059 7.09413Z'
          fill={editMode ? '#1A1D27' : '#ffffff'}
        />
      </svg>
    </button>
  );
};

export default EditButton;

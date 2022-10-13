import { ButtonTypes } from '../types/App.types';
import '../styles/Button.css';
import { useState } from 'react';

const DeleteButton = ({ editMode, onButtonClick }: ButtonTypes) => {
  const [color, colorSet] = useState('#FD4B49');

  return (
    <button
      className={editMode ? 'DeleteButton_active' : 'DeleteButton'}
      onClick={onButtonClick}
      onMouseEnter={() =>
        color === '#ffffff' ? colorSet('#FD4B49') : colorSet('#ffffff')
      }
      onMouseLeave={() =>
        color === '#ffffff' ? colorSet('#FD4B49') : colorSet('#ffffff')
      }>
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1.15385 15L0 13.8462L6.34615 7.5L0 1.15385L1.15385 0L7.5 6.34615L13.8462 0L15 1.15385L8.65385 7.5L15 13.8462L13.8462 15L7.5 8.65385L1.15385 15Z'
          fill={color}
        />
      </svg>
    </button>
  );
};

export default DeleteButton;

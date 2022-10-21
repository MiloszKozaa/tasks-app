import { FirstViewTypes } from '../types/App.types';
import { useState } from 'react';
import './FirstView.css';

const FirstView = ({ activeMode }: FirstViewTypes) => {
  const [view, viewSet] = useState(false);
  setTimeout(() => viewSet(activeMode), 1000);
  return (
    <div className={view ? 'firstView_active' : 'firstView'}>
      <img src={`${process.env.PUBLIC_URL}/icon/arrow.png`} alt='' />
      <div>Add today’s</div>
      <div>first task</div>
    </div>
  );
};

export default FirstView;

import { ListTypes } from '../types/App.types';
import '../styles/ProgressBar.css';

const ProgressBar = ({ list }: ListTypes) => {
  let progress =
    list.length !== 0
      ? Math.round(
          (list.filter(value => value.done === true).length / list.length) * 100
        )
      : 0;

  return (
    <div className='ProgressBar'>
      {progress} %
      <div className='ProgressBar_bar'>
        <div
          className='ProgressBar_progress'
          style={{
            width: `${progress}%`,
          }} />
      </div>
    </div>
  );
};

export default ProgressBar;

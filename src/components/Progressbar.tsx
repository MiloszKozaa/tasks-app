import { ProgressbarTypes } from '../types/App.types';
import './Progressbar.css';

const Progressbar = ({ tasks }: ProgressbarTypes) => {
  let progress =
    tasks.length !== 0
      ? Math.round(
          (tasks.filter((task: any) => task.complete === true).length /
            tasks.length) *
            100
        )
      : 0;
  return (
    <div
      className='ProgressBar'
      style={{
        width: `${progress}%`,
      }}>
      <div style={progress < 10 ? { minWidth: '30px' } : { minWidth: '50px' }}>
        {progress} %
      </div>
      <div className='ProgressBar_progress' />
    </div>
  );
};

export default Progressbar;

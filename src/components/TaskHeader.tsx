import { TaskHeaderTypes } from '../types/App.types';
import './TaskHeader.css';

const TaskHeader = ({ tasksCounter, onClick, inputMode }: TaskHeaderTypes) => {
  let date = new Date().toLocaleString('en-us', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className='taskHeader_header'>
      <div className='taskHeader_data'>
        <div>{date}</div>
        {tasksCounter !== 0 && (
          <div className='taskHeader_tasksCounter'>{tasksCounter} tasks</div>
        )}
      </div>
      <button
        className={inputMode ? 'taskHeader_ButtonActive' : 'taskHeader_Button'}
        onClick={onClick}>
        <img
          style={inputMode ? { transform: 'rotate(135deg)' } : {}}
          src={`${process.env.PUBLIC_URL}/icon/button.png`}
          alt=''
        />
      </button>
    </div>
  );
};

export default TaskHeader;

import { ACTIONS } from './TasksApp';
import { useState } from 'react';
import './Task.css';

const Task = ({ task, dispatch }: any) => {
  const [hover, hoverSet] = useState(false);
  return (
    <div
      className={task.complete ? 'task_complete' : 'task'}
      onMouseEnter={() => hoverSet(!hover)}
      onMouseLeave={() => hoverSet(!hover)}>
      <div
        className='task_name'
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id: task.id } })
        }>
        <img
          src={
            task.complete
              ? `${process.env.PUBLIC_URL}/icon/done.png`
              : `${process.env.PUBLIC_URL}/icon/circle.png`
          }
        />
        {task.name}
      </div>
      <div className='task_details'>
        {hover && !task.complete ? (
          <button
            className='task_delete'
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: task.id } })
            }>
            <img src={`${process.env.PUBLIC_URL}/icon/delete.png`} />
          </button>
        ) : (
          '10:30 pm'
        )}
      </div>
    </div>
  );
};

export default Task;

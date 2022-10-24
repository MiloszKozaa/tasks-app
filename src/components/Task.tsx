import { ACTIONS } from '../layouts/TasksApp';
import { useState } from 'react';
import './Task.css';

const Task = ({ task, dispatch }: any) => {
  const [hover, hoverSet] = useState(false);
  console.log(task.time.substring(1));
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
              : hover
              ? `${process.env.PUBLIC_URL}/icon/circle_hover.png`
              : `${process.env.PUBLIC_URL}/icon/circle.png`
          }
        />
        {task.name}
      </div>
      <div className='task_details'>
        <button
          className={
            !task.complete
              ? hover
                ? 'task_delete_active'
                : 'task_delete'
              : 'task_delete'
          }
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: task.id } })
          }>
          <img src={`${process.env.PUBLIC_URL}/icon/delete.png`} />
        </button>
        <div
          className={
            !task.complete
              ? hover
                ? 'task_time_active'
                : 'task_time'
              : 'task_time'
          }>
          {task.time.charAt(0) === '0' ? task.time.substring(1) : task.time}
        </div>
      </div>
    </div>
  );
};

export default Task;

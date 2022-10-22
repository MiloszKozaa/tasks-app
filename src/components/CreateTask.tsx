import { ACTIONS } from '../layouts/TasksApp';
import { useState } from 'react';
import './CreateTask.css';
import { CreateTaskTypes } from '../types/App.types';

const CreateTask = ({ dispatch }: CreateTaskTypes) => {
  const [name, nameSet] = useState('');
  return (
    <div className='createTask_wrapper'>
      {/*MAX: 18 letters and 10 tasks*/}
      <input
        type='text'
        value={name}
        onChange={event => nameSet(event.target.value)}
      />
      {/* TODO: Select time */}
      <button
        className='createTask_button'
        onClick={() => {
          if (name !== '') {
            dispatch({ type: ACTIONS.ADD_TASK, payload: { name: name } });
            nameSet('');
          }
        }}>
        <img src={`${process.env.PUBLIC_URL}/icon/apply.png`} alt='' />
      </button>
    </div>
  );
};

export default CreateTask;

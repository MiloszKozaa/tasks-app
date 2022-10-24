import { ACTIONS } from '../layouts/TasksApp';
import { useState } from 'react';
import './CreateTask.css';
import { CreateTaskTypes } from '../types/App.types';

const CreateTask = ({ dispatch, tasks }: CreateTaskTypes) => {
  const [name, nameSet] = useState('');
  const [time, timeSet] = useState('00:00');
  const [inputError, inputErrorSet] = useState(false);
  const [timeError, timeErrorSet] = useState(false);
  const inputLength = 30;
  const tasksLength = 10;
  const emptyError = 'You have to type something. ';
  const tasksError = 'You can have only 10 tasks. ';
  const charactersError = `To many characters!   ${name.length} / ${inputLength} `;

  return (
    <div className='createTask_wrapper'>
      <div className='createTask_form'>
        <div className='createTask_pleaceholder'>Type your task</div>
        <input
          className='createTask_input'
          autoFocus={true}
          autoComplete='off'
          type='text'
          value={name}
          onChange={event => {
            nameSet(event.target.value);
            inputErrorSet(false);
          }}
        />
        <div className='createTask_inputInfo'>
          {name.length <= inputLength && !inputError && tasks < tasksLength && (
            <div className='createTask_inputCounter'>
              {name.length} / {inputLength}
            </div>
          )}
          <div className='createTask_inputError'>
            {inputError && emptyError}
            {tasks >= tasksLength && tasksError}
            {name.length > inputLength && charactersError}
          </div>
        </div>

        <input
          type='time'
          className='createTask_time'
          value={time}
          onChange={(e: any) => {
            timeSet(e.target.value);
            timeErrorSet(false);
          }}
        />
        <div className='createTask_inputError'>{timeError && emptyError}</div>
      </div>

      <button
        className='createTask_button'
        onClick={() => {
          if (
            name !== '' &&
            tasks < tasksLength &&
            time !== '00:00' &&
            name.length <= inputLength
          ) {
            dispatch({
              type: ACTIONS.ADD_TASK,
              payload: { name: name, time: time },
            });
            nameSet('');
            timeSet('00:00');
          }
          if (name === '') {
            inputErrorSet(true);
          }
          if (time === '00:00') {
            timeErrorSet(true);
          }
        }}>
        <img src={`${process.env.PUBLIC_URL}/icon/apply.png`} alt='' />
      </button>
    </div>
  );
};

export default CreateTask;

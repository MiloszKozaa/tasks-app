import { ACTIONS } from '../layouts/TasksApp';
import { useState } from 'react';
import './CreateTask.css';
import { CreateTaskTypes } from '../types/App.types';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

const CreateTask = ({ dispatch, tasks }: CreateTaskTypes) => {
  const [name, nameSet] = useState('');
  const [error, errorSet] = useState(false);
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
  const emptyError = 'You have to type something. ';
  const tasksError = 'You can have only 10 tasks. ';
  const charactersError = `To many characters!   ${name.length} / 22 `;

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

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
            errorSet(false);
          }}
        />
        <div className='createTask_inputInfo'>
          {name.length <= 22 && !error && tasks < 10 && (
            <div className='createTask_inputCounter'>{name.length} / 22</div>
          )}
          <div className='createTask_inputError'>
            {error && emptyError}
            {tasks >= 10 && tasksError}
            {name.length > 22 && charactersError}
          </div>
        </div>
      </div>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <TimePicker
            label="Time"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          
        </Stack>
      </LocalizationProvider>

      <button
        className='createTask_button'
        onClick={() => {
          if (name !== '' && tasks < 10 && name.length <= 22) {
            dispatch({ type: ACTIONS.ADD_TASK, payload: { name: name } });
            nameSet('');
          }
          if (name === '') {
            errorSet(true);
          }
        }}>
        <img src={`${process.env.PUBLIC_URL}/icon/apply.png`} alt='' />
      </button>
    </div>
  );
};

export default CreateTask;

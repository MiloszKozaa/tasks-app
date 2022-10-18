import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Task from './Task';
import Popup from './Popup';
import './TasksApp.css';
import { useReducer, useState } from 'react';

export const ACTIONS = {
  ADD_TASK: 'add-task',
  TOGGLE_TASK: 'toggle-task',
  DELETE_TASK: 'delete-task',
};

const reducer = (tasks: any, actions: any) => {
  switch (actions.type) {
    case ACTIONS.ADD_TASK:
      return [...tasks, newTask(actions.payload.name)];
    case ACTIONS.TOGGLE_TASK:
      return tasks.map((task: any) => {
        if (task.id === actions.payload.id) {
          return { ...task, complete: !task.complete };
        }
        return { ...task };
      });
    case ACTIONS.DELETE_TASK:
      return tasks.filter((task: any) => task.id !== actions.payload.id);
  }
};

const newTask = (name: string) => {
  return { id: Math.random(), name: name, complete: false };
};

const TasksApp = () => {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [name, nameSet] = useState('');
  return (
    <div className='TasksApp'>
      <Header />
      <button>Show div</button>
      <Popup trigger={true} />
      {/* <div className='TaskApp_wrapper'>
        <input
          type='text'
          value={name}
          onChange={event => nameSet(event.target.value)}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              dispatch({ type: ACTIONS.ADD_TASK, payload: { name: name } });
              nameSet('');
            }
          }}
        />
        {tasks.length > 0 ? (
          tasks.map((task: any) => {
            return <Task key={task.id} task={task} dispatch={dispatch} />;
          })
        ) : (
          <div>Write your first task!</div>
        )}
      </div> */}
      <Footer />
    </div>
  );
};

export default TasksApp;

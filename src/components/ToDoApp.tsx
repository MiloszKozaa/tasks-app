import { useState } from 'react';
import { ITask } from '../interfaces/Interfaces';
import Input from './Input';
import ProgressBar from './ProgressBar';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import '../styles/ToDoApp.css';

function ToDoApp() {
  const [input, inputSet] = useState('');
  const [list, listSet] = useState<ITask[]>([]);
  const [editMode, editModeSet] = useState(false);

  const addToDo = (toDo: string) => {
    const newToDo = {
      id: Math.random(),
      text: toDo,
      done: false,
      editMode: false,
    };
    listSet([...list, newToDo]);
  };

  const onEnterPress = (event: any) => {
    if (event.key === 'Enter' && input !== '') {
      addToDo(input);
      inputSet('');
    }
  };

  const deleteTask = (id: number) => {
    let newList = list.filter(task => task.id !== id);
    listSet(newList);
  };

  const taskDone = (id: number) => {
    let updatedTasks = list.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });

    listSet(updatedTasks);
  };

  const editTask = (e: any, id: number, done: boolean, mode: boolean) => {
    if (!done && mode) {
      const editedList = [...list];
      editedList[id].text = e.target.value;
      listSet(editedList);
    }
  };

  return (
    <div>
      <div className='ToDoApp_firstElement'>
        <Input
          value={input}
          pleaceholder='Write first task...'
          style='Input'
          onInputChange={(e: any) => inputSet(e.target.value)}
          onEnterPress={onEnterPress}
        />
        <EditButton
          name='edit'
          editMode={editMode}
          onButtonClick={() => {
            editMode ? editModeSet(false) : editModeSet(true);
          }}
        />
      </div>
      <ProgressBar list={list} />
      <ul className={'ToDoApp_list'}>
        {list.map((task: any, id: any) => (
          <li
            key={id}
            
            onClick={() => (!editMode ? taskDone(task.id) : null)}
            style={
              task.done
                ? { opacity: '20%', textDecorationLine: 'line-through' }
                : { opacity: '100%' }
            }>
            {editMode && !task.done ? (
              <div className={editMode ? 'ToDoApp_editTask' : 'ToDoApp_task'}>
                <Input
                  value={task.text}
                  style='EditInput'
                  onInputChange={(e: any) =>
                    editTask(e, id, task.done, editMode)
                  }
                />
                <DeleteButton
                  name='delete'
                  onButtonClick={() => deleteTask(task.id)}
                />
              </div>
            ) : (
              <div className={editMode ? 'ToDoApp_editTask' : 'ToDoApp_task'}>{task.text}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;

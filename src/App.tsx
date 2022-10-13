import { useState } from 'react';
import { ITask } from './Interfaces';
import Input from './components/Input';
import ProgressBar from './components/ProgressBar';
import Button from './components/Button';
import './App.css';

function App() {
  const [input, inputSet] = useState('');
  const [list, listSet] = useState<ITask[]>([]);

  const addToDo = (toDo: string) => {
    const newToDo = {
      id: Math.random(),
      text: toDo,
      done: false,
      editMode: false,
    };
    listSet([...list, newToDo]);
    console.log(...list);
    console.log(newToDo);
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

  const editTask = (
    event: any,
    id: number,
    done: boolean,
    editMode: boolean
  ) => {
    if (!done && editMode) {
      const editedList = [...list];
      editedList[id].text = event.target.value;
      listSet(editedList);
    }
  };

  return (
    <div className='App'>
      <Input
        value={input}
        onInputChange={(e: any) => inputSet(e.target.value)}
        onEnterPress={onEnterPress}
      />
      <ProgressBar list={list} />
      <ul>
        {list.map((task: any, id: any) => (
          <li key={task.id}>
            <Button
              name='done'
              style={task.done ? 'done' : 'todo'}
              onButtonClick={() => taskDone(task.id)}
            />
            {!task.done ? (
              <Button
                name='Edit'
                onButtonClick={() =>
                  task.editMode
                    ? (task.editMode = false)
                    : (task.editMode = true)
                }
              />
            ) : null}
            <Input
              value={task.text}
              onInputChange={(e: any) =>
                editTask(e, id, task.done, task.editMode)
              }
              onEnterPress={(e: any) => {
                if (e.key === 'Enter') {
                  task.editMode = false;
                  console.log('pressed enter');
                }
              }}
            />
            <Button name='Done' onButtonClick={() => deleteTask(task.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

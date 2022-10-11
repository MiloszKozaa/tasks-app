import { useState } from 'react';
import { ITask } from './Interfaces';
import './App.css';

function App() {
  const [input, inputSet] = useState('');
  const [list, listSet] = useState<ITask[]>([]);

  const addToDo = (toDo: string) => {
    const newToDo = {
      id: Math.random(),
      text: toDo,
      done: false,
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

  return (
    <div className='App'>
      <input
        type='text'
        value={input}
        onChange={e => {
          inputSet(e.target.value);
        }}
        onKeyPress={onEnterPress}
      />
      {list.length}
      <ul>
        {list.map((task: any) => (
          <li key={task.id}>
            <div
              className={task.done ? 'done' : 'todo'}
              onClick={() => taskDone(task.id)}>
              {task.text}
            </div>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

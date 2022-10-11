import { useState } from 'react';
import './App.css';

function App() {
  const [input, inputSet] = useState('');
  const [list, listSet] = useState([
    {
      id: 0,
      text: '',
    },
  ]);

  const addToDo = (toDo: string) => {
    const newToDo = {
      id: Math.random(),
      text: toDo,
    };
    listSet([...list, newToDo]);
    console.log(...list);
    console.log(newToDo);
  };

  const onEnterPress = (event: any) => {
    if (event.key === 'Enter') {
      addToDo(input);
      inputSet('');
    }
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
      {list.length - 1}
      <ul>
        {list.map((task: any) =>
          task.text !== '' ? <li key={task.id}>{task.text}</li> : null
        )}
      </ul>
    </div>
  );
}

export default App;

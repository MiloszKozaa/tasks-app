import { ACTIONS } from './TasksApp';

const Task = ({ task, dispatch }: any) => {
  return (
    <>
      <div className='task'>
        {task.name} {task.complete ? 'completed' : ''}
      </div>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id: task.id } })
        }>
        Done
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: task.id } })
        }>
        Delete
      </button>
    </>
  );
};

export default Task;

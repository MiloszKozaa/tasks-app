import './CompleteTasks.css';

const CompleteTasks = () => {
  return (
    <div className='completeTasks_wrapper'>
      <div className='completeTasks_main'>
        All tasks completed!
        <div className='completeTasks_number'>100%</div>
      </div>
      <div className='completeTasks_footer'>
        I'm waiting for a new tasks tomorrow
      </div>
    </div>
  );
};

export default CompleteTasks;

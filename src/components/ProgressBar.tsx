import { ListTypes } from '../Interfaces';

const ProgressBar = ({ list }: ListTypes) => {
  return (
    <div className=''>
      {list.filter(value => value.done === true).length} / {list.length}
    </div>
  );
};

export default ProgressBar;

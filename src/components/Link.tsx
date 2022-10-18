import { LinkTypes } from '../types/App.types';
import './Link.css';

const Link = ({ link, linkTitle }: LinkTypes) => {
  return (
    <a className='link' target='_blank' href={link}>
      {linkTitle}
    </a>
  );
};

export default Link;

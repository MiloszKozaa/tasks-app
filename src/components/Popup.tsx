import './Popup.css';
import { PopupTypes } from '../types/App.types';

const Popup = ({ trigger }: PopupTypes) => {
  return (
    <div className={trigger ? 'popup active' : 'popup'}>
      <div>
        some text Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Suscipit nesciunt aperiam, architecto culpa qui voluptas veritatis
        repellendus nostrum labore ipsam, voluptatum voluptatem cupiditate,
        blanditiis molestiae quam natus. Ipsam explicabo earum, cupiditate
        accusamus a aperiam est, laudantium ab, facere quisquam at reprehenderit
        accusantium officia. Aliquid dignissimos, rem quod omnis, alias unde
        tenetur ad incidunt rerum minima nobis. Laboriosam hic facilis aliquid
        repudiandae repellendus nemo voluptas a itaque tempore ullam officiis,
        exercitationem cupiditate doloribus quam impedit, harum vero! Explicabo
        distinctio obcaecati dicta tempore ex fuga facere unde a est vero,
        possimus nisi fugiat, officiis perspiciatis aspernatur pariatur
        exercitationem! Laboriosam dolore ex corrupti.
      </div>
      <button>&times;</button>
    </div>
  );
};

export default Popup;

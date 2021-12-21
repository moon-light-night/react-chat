import Profile from '../Profile/Profile';
import Posts from './Posts/Posts';
import cover from '../../cover.jpg'

const Content = () => {
  return (
    <div className="main-content">
      <div className="main-content__cover">
        <img src={cover} alt={'cover'} />
      </div>
      <div className="main-content__body">
        <Profile />
        <Posts />
      </div>
    </div>
  );
}

export default Content
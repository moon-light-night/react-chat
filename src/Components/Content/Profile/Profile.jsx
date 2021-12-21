import s from './Profile.module.css'
import Posts from '../Posts/Posts';
import cover from '../../../cover.jpg'
import { Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div className={s.profile}>
      <Outlet />
      <img className={s.profile_cover} src={cover} alt={'cover'} />
      <div className={s.profile_name}>
        ava + descr
      </div>
      <Posts />
    </div>
  );
}

export default Profile
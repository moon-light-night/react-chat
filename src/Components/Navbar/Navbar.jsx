import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={s.main_navbar}>
      <NavLink className={navData => navData.isActive ? s.active : s.main_navbar__link} to="/profile">
        Profile
      </NavLink>
      <NavLink className={navData => navData.isActive ? s.active : s.main_navbar__link} to="/messages">
        Messages
      </NavLink>
      <NavLink className={navData => navData.isActive ? s.active : s.main_navbar__link} to="/news">
        News
      </NavLink>
      <NavLink className={navData => navData.isActive ? s.active : s.main_navbar__link} to="/music">
        Music
      </NavLink>
      <NavLink className={navData => navData.isActive ? s.active : s.main_navbar__link} to="/settings">
        Settings
      </NavLink>
    </div>
  );
}

export default Navbar
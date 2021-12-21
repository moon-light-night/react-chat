import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={s.main_navbar}>
      <ul className="no-list-style-type">
        <li>
          Profile
        </li>
        <li>
          Messages
        </li>
        <li>
          News
        </li>
        <li>
          Music
        </li>
        <li>
          Settings
        </li>
      </ul>
    </div>
  );
}

export default Navbar
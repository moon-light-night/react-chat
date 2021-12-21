import s from './Header.module.css'
import logo from '../../logo.svg'

const Header = () => {
  return (
    <div className={s.main_header}>
      <img src={logo} alt={'logo'} />
    </div>
  );
}

export default Header
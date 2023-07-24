import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';
import css from './Navbar.module.css';

const Navbar = () => (
  <nav className={css.nav}>
    <div className={css.logo}>
      <img src={planet} alt="Logo" />
      <p>Space Travelers Hub</p>
    </div>
    <ul className={css.ul}>
      <li>
        <NavLink to="/" className={css.navigator} activeClassName="active"> Rockets </NavLink>
      </li>
      <li>
        <NavLink to="/missions" className={css.navigator} activeClassName="active"> Missions </NavLink>
      </li>
      <li className={css.sep}>|</li>
      <li>
        <NavLink to="/profile" className={css.navigator} activeClassName="active"> My Profile </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;

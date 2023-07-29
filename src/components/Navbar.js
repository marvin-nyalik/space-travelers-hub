import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';
import css from './Navbar.module.css';

const Navbar = () => (
  <nav className={css.nav}>
    <div className={css.logo}>
      <img src={planet} alt="Logo" />
      <p>Space Travellers Hub</p>
    </div>
    <ul className={css.ul} id="main-nav">
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : '',
          })}
        >
          {' '}
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/missions"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : '',
          })}
        >
          {' '}
          Missions
        </NavLink>
      </li>
      <li className={css.sep}>|</li>
      <li>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : '',
          })}
        >
          {' '}
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;

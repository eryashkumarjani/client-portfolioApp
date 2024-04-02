import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/home" className='Navbar-Text'> Home </NavLink>
      <NavLink to="/aboutMe" className='Navbar-Text'> About </NavLink>
      <NavLink to="/myResume" className='Navbar-Text'> Resume</NavLink>
      <NavLink to="/contactMe" className='Navbar-Text'> Contact </NavLink>
    </nav >
  );
}

export default Navbar;

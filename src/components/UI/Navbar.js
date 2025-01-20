import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <div className="Navbar-left">
          <ul className="Navbar-list">
            <li>
              <NavLink to="/home" className="Navbar-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/snaps" className="Navbar-link">
                Snaps
              </NavLink>
            </li>
            <li>
              <NavLink to="/something" className="Navbar-link">
                TODO
              </NavLink>
            </li>
            <li>
              <NavLink to="/something" className="Navbar-link">
                TODO
              </NavLink>
            </li>
            <li>
              <NavLink to="/something" className="Navbar-link">
                TODO
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Navbar-right">
          <ul className="Navbar-list">
            <li>
              <button>Dark Mode</button> 
            </li>
            <li>
              {/* TODO: USER PROFILE HERE */}
              <p>User</p>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

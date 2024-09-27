import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="collapse navbar-collapse justify-content-between px-4">
          <ul className="navbar-nav">
            <NavLink className="nav-link" to={`/home`}>Keith</NavLink>
          </ul>
          <ul className="navbar-nav">
            <NavLink className="nav-link" to={`/`}>About</NavLink>
            <NavLink className="nav-link" to={`/profile`}>Profile</NavLink>
            <NavLink className="nav-link" to={`/resume`}>Resume</NavLink>
            <NavLink className="nav-link" to={`/contact`}>Contact</NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

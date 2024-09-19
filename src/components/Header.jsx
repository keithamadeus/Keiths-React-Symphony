// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="collapse navbar-collapse justify-content-between px-4">
          <ul className="navbar-nav">
            {/* TODO: Turn these into "Navigation" components */}
            <li className="nav-item"><Link className="nav-link" to={`/`}>Keith</Link></li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to={`/about`}>About</Link></li>
            <li className="nav-item"><Link className="nav-link" to={`/contact`}>Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to={`/profile`}>Profile</Link></li>
            <li className="nav-item"><Link className="nav-link" to={`/resume`}>Resume</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

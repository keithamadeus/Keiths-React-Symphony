// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <nav>
        <ul className="side-left">
          {/* TODO: Turn these into "Navigation" components */}
          <li><Link to={`/`}>Keith</Link></li>
        </ul>
        <ul className="side-right">
          <li><Link to={`/about`}>About</Link></li>
          <li><Link to={`/contact`}>Contact</Link></li>
          <li><Link to={`/profile`}>Profile</Link></li>
          <li><Link to={`/resume`}>Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

// Need to add all nav
import { Link } from 'react-router-dom';
export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div className="collapse navbar-collapse justify-content-between px-4">
                <ul className="navbar-nav">
                    {/* <li className="nav-item nav-item text-light">Keith</li> */}
                    <li className="nav-item"><Link className="nav-link text-light" to={`/`}>Keith</Link></li>

                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to={`/about`}>About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={`/contact`}>Contact</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={`/profile`}>Profile</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={`/resume`}>Resume</Link></li>
                </ul>
            </div>
        </nav>
    );
}
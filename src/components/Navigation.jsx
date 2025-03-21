// Need to add all nav
import { NavLink } from 'react-router-dom';
export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-md fixed-top">
            <div className="collapse navbar-collapse justify-content-between px-4">
                <ul className="navbar-nav">
                    {/* <li className="nav-item nav-item text-light">Keith</li> */}
                    <li className="nav-item"><NavLink className="nav-link text-light" to={`/home`}>Keith</NavLink></li>

                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink className="nav-link text-light" to={`/`}>About</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={`/contact`}>Contact</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={`/profile`}>Profile</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={`/resume`}>Resume</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(props) {
  return (
    <footer>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom">
        <div className="collapse navbar-collapse justify-content-end px-4">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon size="2x" icon={["fab", "github"]} /></a></li>
            <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} /></a></li>
            <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon size="2x" icon={["fab", "google-plus"]} /></a></li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

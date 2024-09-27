import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(props) {
  return (
    <footer>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom">
        <div className="collapse navbar-collapse justify-content-end px-4">
          <ul className="navbar-nav">
            <a className="nav-link" href="#"><FontAwesomeIcon size="2x" icon={["fab", "github"]} /></a>
            <a className="nav-link" href="#"><FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} /></a>
            <a className="nav-link" href="#"><FontAwesomeIcon size="2x" icon={["fab", "google-plus"]} /></a>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

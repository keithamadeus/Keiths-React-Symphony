import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(props) {
  return (
    <footer>
      <nav className="navbar navbar-expand-md fixed-bottom">
        <div className="collapse navbar-collapse justify-content-end px-4">
          <ul className="navbar-nav">
            <a className="nav-link text-light" href="https://github.com/keithamadeus" target="_blank"><FontAwesomeIcon size="2x" icon={["fab", "github"]} /></a>
            <a className="nav-link text-light" href="https://www.linkedin.com/in/keith-a-williams-7841b022/" target="_blank"><FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} /></a>
            <a className="nav-link text-light" href="mailto: keith.amadeus.williams@gmail.com" target="_blank"><FontAwesomeIcon size="2x" icon={["fab", "google-plus"]} /></a>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

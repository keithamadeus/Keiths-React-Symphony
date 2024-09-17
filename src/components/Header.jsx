
export function Header(props) {
  return (
    <header>
      <nav>
        <ul className="side-left">
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
        <ul className="side-right">
          {props.children}
        </ul>
      </nav>
    </header>
  );
}

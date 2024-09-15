
export function Header(props) {
  return (
    <header>
      <nav>
        <ul class="side-left">
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
        <ul class="side-right">
          {props.children}
        </ul>
      </nav>
    </header>
  );
}

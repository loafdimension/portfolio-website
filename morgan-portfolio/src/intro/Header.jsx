import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">
        <p id="header-name">morgan</p>
      </Link>
    </nav>
  );
}

export default Header;

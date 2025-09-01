import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header-nav">
      <Link to="/works" id="header-works">
        works
      </Link>

      <Link to="/" id="header-name">
        morgan
      </Link>

      <Link to="/about" id="header-about">
        about
      </Link>
    </nav>
  );
}

export default Header;

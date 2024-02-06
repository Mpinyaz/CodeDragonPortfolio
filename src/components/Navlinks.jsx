import "./Navlinks.css";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <>
      <nav>
        <div className="nav_logo">LOGO</div>
        <ul className="nav_links">
          <li>
            <Link to="/" className="nav_links-items">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav_links-items">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav_links-items">
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav_links-items">
              Projects
            </Link>
          </li>
        </ul>
        <div className="nav_button">
          <button>Contact</button>
        </div>
      </nav>
    </>
  );
};

export default Navlinks;

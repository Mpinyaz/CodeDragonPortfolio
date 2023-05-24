import logo from "../images/dragon.png";
import "./Header.css";

export const Header = () => {
  return (
    <div className="container-header">
      <nav>
        <ul className="menu">
          <li className="logo">
            <a href="https://www.google.com">
              <img src={logo} alt="logo" className="image" />
              Code Dragon
            </a>
          </li>
          <li>
            <a className="items" href="">
              Home
            </a>
          </li>
          <li>
            <a className="items" href="">
              About
            </a>
          </li>
          <li>
            <a className="items" href="">
              Services
            </a>
          </li>
          <li>
            <a className="items" href="">
              Projects
            </a>
          </li>
          <li>
            <a className="items" href="">
              <button>Contact Me</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

import logo from "../images/dragon.png";
import "./Header.css"

export const Header = () => {
    return (
      <div class="container-header">
        <a href="https://www.google.com" class="brand">
          <img src={logo} alt="" class="logo" />
          <div>Code Dragon</div>
        </a>
        <nav>
          <a id="about" class="link-list" href="">
            About
          </a>
          <a id="blog" class="link-list"  href="">
            Services
          </a>
          <a id="projects" class="link-list" href="">
            Projects
          </a>
        </nav>
        <a class="link-list" id="contact" href="">
          <button>Contact Me</button>
        </a>
      </div>
    );
}

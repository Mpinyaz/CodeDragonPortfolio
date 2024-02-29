import "./Footer.css";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
const Footer = () => {
  return (
    <div className="container-footer items-center flex mt-auto w-full px-2 py-3 justify-between text-base font-semibold">
      <nav className="flex content-between text-white">
        <a id="about" href="/" className="mx-1">
          About
        </a>
        <a id="blog" href="/" className="mx-1">
          Services
        </a>
        <a id="projects" href="/" className="mx-1">
          Projects
        </a>
      </nav>

      <div className="flex gap-x-3 justify-between">
        <a id="Github" href="https://github.com/Mpinyaz">
          <GrGithub size={25} style={{ fill: "white" }} />
        </a>
        <a
          id="Linkedin"
          href="https://www.linkedin.com/in/elton-mpinyuri-974984134/"
        >
          <FaLinkedin size={25} style={{ fill: "white" }} />
        </a>
        <a id="instagram" href="https://www.instagram.com/mpinyaz/">
          <FaInstagramSquare size={25} style={{ fill: "white" }} />
        </a></div>
    </div>
  );
};

export default Footer;

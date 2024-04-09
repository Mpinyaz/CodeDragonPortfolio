import "./contact.css";
import { Email } from "../../components/Email";
import useDocumentTitle from "../../context/useDocumentTitle";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { BiLogoDevTo } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { animateBanner, revealImage } from "./animations";
const Contact = () => {
  useDocumentTitle("Contact - 🐲");
  const Banner = useRef(null);
  const bannerTextLeft = useRef(null);
  const bannerTextRight = useRef(null);
  const bannerTextLine = useRef(null);
  const bannerImage = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      const gTl = gsap.timeline();
      gTl
        .add(revealImage(bannerImage))
        .add(
          animateBanner(bannerTextLeft, bannerTextRight, bannerTextLine),
          "+=0.25",
        );
    },
    { section: Banner },
  );

  const arrLinks = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/elton-mpinyuri-974984134/",
      icon: <FaLinkedin size={25} />,
    },
    {
      title: "Github",
      url: "https://github.com/Mpinyaz",
      icon: <GrGithub size={25} />,
    },
    {
      title: "DEVTO",
      url: "https://dev.to/mpinyaz",
      icon: <BiLogoDevTo size={26} />,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/mpinyaz/",
      icon: <FaInstagramSquare size={25} />,
    },
    {
      title: "Email Me",
      url: "mailto:ebmpinyuri@gmail.com?subject=Lets%20chat",
      icon: <LuMail size={23} />,
    },
  ];
  const linkList = arrLinks.map((link) => (
    <div
      key={link.title}
      className="p-1 basis-1/2 sm:basis-1/3 md:basis-1/2 lg:basis-1/2 mb-4 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2"
    >
      <button className="w-full h-10 bg-purple-200  shadow-link-shadow rounded-full gap-x-2 px-4 py-2 flex flex-row items-center">
        <a
          className="flex items-center w-full gap-2 justify-center text-nowrap"
          href={link.url}
        >
          {link.icon}
          {link.title}
        </a>
      </button>
    </div>
  ));
  return (
    <>
      <section ref={Banner} className="mb-2 p-2 gap-2">
        <div className="banner flex justify-center items-center">
          <img
            src="src/images/fierceDragon.jpeg"
            ref={bannerImage}
            alt="banner-image"
            className="rounded-full"
            height="200px"
            width="200px"
          />
        </div>
        <div className="mx-3">
          <h1 className="flex items-center text-4xl font-semibold">
            <span ref={bannerTextLeft} className="text-white">
              Code
            </span>
            <span
              ref={bannerTextLine}
              className="hero__line inline-block banner-text h-2 w-full m-2 rounded-lg"
            ></span>
            <span ref={bannerTextRight} className="text-white">
              Dragon
            </span>
          </h1>
        </div>
      </section>
      <section className="mt-8 flex flex-col md:flex-row  py-1 gap-3 px-3">
        <div
          id="contentlinks"
          className="contact-card basis-1/2 p-6 flex flex-col"
        >
          <div className="text-start gap-1 flex-auto">
            <h1 className="text-5xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mb-2">
              {"Let's Connect"}
            </h1>
            <p className="p-2 mt-4">
              {
                "I'm always open to new opportunities and collaborations. If you have a project in mind or want to discuss how I can contribute to your this team, please don't hesitate to reach out. You can find my contact information on this site."
              }
            </p>
          </div>
          <div className="flex-auto flex flex-wrap">{linkList}</div>
        </div>
        <div className="contact-card basis-1/2 p-6 ">
          <h1 className="text-5xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mb-2">
            Send me mail
          </h1>
          <Email />
        </div>
      </section>
    </>
  );
};

export default Contact;

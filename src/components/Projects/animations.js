import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateProjects = () => {
  const proj = document.querySelector(".proj_vertical");
  const proj_scroll_left = document.querySelector(".proj_col_left");
  const proj_tl = gsap.timeline({ paused: true });
  proj_tl.fromTo(
    proj_scroll_left,
    { y: 0 },
    { y: "40vh", duration: 1.5, ease: "none" },
    0,
  );
  const proj_scroll = ScrollTrigger.create({
    animation: proj_tl,
    trigger: proj,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    // markers: true,
  });
};

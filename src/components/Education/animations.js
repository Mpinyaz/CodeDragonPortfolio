import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateEducation = () => {
  const edu = document.querySelector(".edu_vertical");
  const edu_scroll_left = document.querySelector(".edu_col_left");
  const edu_tl = gsap.timeline({ paused: true });
  edu_tl.fromTo(
    edu_scroll_left,
    { y: 0 },
    { y: "170vh", duration: 1, ease: "none" },
    0,
  );
  const edu_scroll = ScrollTrigger.create({
    animation: edu_tl,
    trigger: edu,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    // markers: true,
  });
};

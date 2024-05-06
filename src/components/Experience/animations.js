import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateExperience = () => {
  const exp = document.querySelector(".exp_vertical");
  const exp_scroll_left = document.querySelector(".exp_col_left");
  const exp_tl = gsap.timeline({ paused: true });
  exp_tl.fromTo(
    exp_scroll_left,
    { y: 0 },
    { y: "170vh", duration: 1, ease: "none" },
    0,
  );
  const exp_scroll = ScrollTrigger.create({
    animation: exp_tl,
    trigger: exp,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    // markers: true,
  });
};

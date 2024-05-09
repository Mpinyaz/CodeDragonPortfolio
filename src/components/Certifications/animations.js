import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateCertifications = () => {
  const cert = document.querySelector(".cert_vertical");
  const cert_scroll_left = document.querySelector(".cert_col_left");
  const cert_tl = gsap.timeline({ paused: true });
  cert_tl.fromTo(
    cert_scroll_left,
    { y: 0 },
    { y: "130vh", duration: 1, ease: "none" },
    0,
  );
  const cert_scroll = ScrollTrigger.create({
    animation: cert_tl,
    trigger: cert,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    // markers: true,
  });
};

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const rotateTitleAnimation = () => {
  const gsapSq = gsap.utils.toArray(".section-title__square");
  gsapSq.forEach((gSq, i) => {
    const rotat = gsap.from(gSq, { duration: 3, rotation: 720 });
    ScrollTrigger.create({
      trigger: gSq,
      animation: rotat,
      start: "top bottom",
      scrub: 1.9,
    });
  });
};

const animateLinksIn = () => {
  const sidebarItems = gsap.utils.toArray(".sidebar-items");
  gsap.to(".overlay-toggle", {
    left: "-100%",
    duration: 1,
    ease: "power4.out",
  });
  gsap.to(
    sidebarItems,
    { left: "0%", duration: 1, stagger: 0.075, ease: "power4.out" },
    "<",
  );
  gsap.to(
    ".home",
    { filter: "blur(15px)", duration: 1, immediateRender: false },
    "<",
  );
};

const animateLinksOut = () => {
  const sidebarItems = gsap.utils.toArray(".sidebar-items");
  gsap.to(".overlay-toggle", { left: "0%", duration: 1, ease: "power4.out" });
  gsap.to(
    sidebarItems,
    { left: "-110%", duration: 1, stagger: 0.075, ease: "power4.out" },
    "<",
  );
  gsap.to(
    ".home",
    { filter: "blur(0px)", duration: 1, immediateRender: false },
    "<",
  );
};

export { animateLinksIn, animateLinksOut, rotateTitleAnimation };

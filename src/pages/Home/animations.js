import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";
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

const greeterScroll = (greeter) => {
  const text = new SplitType(greeter, { types: "words" });
  gsap.set(".greeter_background_image", {
    autoAlpha: 1,
    scale: 1,
    yPercent: 0,
  });
  gsap.set(".word", { autoAlpha: 0.4 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".greeter",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  tl.to(".word", {
    duration: 1.2,
    autoAlpha: 1,
    stagger: 0.4,
  }).to(
    ".greeter_background_image",
    {
      duration: 20,
      scale: 0.95,
      autoAlpha: 0,
      yPercent: -5,
    },
    0,
  );
};
export { animateLinksIn, animateLinksOut, rotateTitleAnimation, greeterScroll };

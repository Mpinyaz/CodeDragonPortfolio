import scrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(scrollTrigger);

export const animateExpSlider = () => {
  let panels = gsap.utils.toArray(".slides section");
  let slider = document.querySelector(".slides");
  gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slides",
      start: "center 45%",
      pin: ".home-container",
      pinSpacer: false,
      pinSpacing: false,
      invalidateOnRefresh: true,
      scrub: 1,
      // snap: 1 / (panels.length - 1),
      end: () => "+=" + (slider.offsetWidth - window.innerWidth + 115),
    },
  });
};

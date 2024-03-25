import { gsap } from "gsap";
export const fadeIn = (initialHomeText, finalHomeText, homeHover) => {
  homeHover.current.addEventListener("mouseover", () => {
    const tl = gsap.timeline();
    tl.to(finalHomeText.current, {
      yPercent: -70,
      duration: 0.3,
      ease: "sine.in",
    }).to(initialHomeText.current, {
      yPercent: -100,
      duration: 0.3,
      ease: "sine.out",
    });
  });
};

export const fadeOut = (initialHomeText, finalHomeText, homeHover) => {
  homeHover.current.addEventListener("mouseout", () => {
    const tl = gsap.timeline();
    tl.to(finalHomeText.current, {
      yPercent: 100,
      duration: 0.3,
      ease: "sine.out",
    }).to(initialHomeText.current, {
      yPercent: 0,
      duration: 0.3,
      ease: "sine.in",
    });
  });
};

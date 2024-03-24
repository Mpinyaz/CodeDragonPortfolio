import { gsap } from "gsap";

export const animateBanner = (
  bannerTextLeft,
  bannerTextRight,
  bannerTextLine
) => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 2,
    },
  });

  tl.to(bannerTextLine.current, {
    scaleX: 1,
  })
    .fromTo(
      bannerTextLeft.current,
      {
        x: 100,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
      },
      "<15%"
    )
    .fromTo(
      bannerTextRight.current,
      {
        x: -100,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
      },
      "<"
    );

  return tl;
};

export const revealImage = (bannerImage) => {
  const tl = gsap.timeline();

  tl.fromTo(
    bannerImage.current,
    {
      autoAlpha: 0,
      y: 32,
    },
    {
      autoAlpha: 1,
      y: 0,
      stagger: 0.2,
      ease: "expo.out",
      duration: 2,
    }
  );

  return tl;
};

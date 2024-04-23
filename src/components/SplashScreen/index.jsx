import { useLayoutEffect, useRef } from "react";
import logo from "../../images/dragon.png";
import gsap from "gsap";
import React from "react";

export function SplashScreen() {
  const comp = useRef(null);
  const dragonLogo = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from(dragonLogo.current, { opacity: 0, duration: 0.5 })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-teal-700 absolute font-spaceGrotesk text-center font-extrabold top-0 left-0 z-10 w-full flex flex-col justify-center gap-10 tracking-tight"
      >
        <h1 className="text-9xl text-white" id="title-1">
          Software Engineer
        </h1>
        <h1 className="text-9xl text-white" id="title-2">
          Designer
        </h1>
        <h1 className="text-9xl text-white" id="title-3">
          Freelancer
        </h1>
      </div>
      <div className="h-screen flex flex-col bg-gray-950 justify-center place-items-center">
        <img
          ref={dragonLogo}
          src={logo}
          alt="logo"
          className="rounded-full cursor-pointer w-[100px] h-[100px] shadow-md"
        />
        <h1
          id="welcome"
          className="text-9xl font-bold text-gray-100 font-spaceGrotesk"
        >
          Enter the Dragon
        </h1>
      </div>
    </div>
  );
}

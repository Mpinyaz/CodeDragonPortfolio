import { useLayoutEffect, useRef } from "react";
import logo from "/src/images/dragon.png";
import gsap from "gsap";
import React from "react";
import Splitting from "splitting";
import "./Splashscreen.css";

export function SplashScreen() {
  const comp = useRef(null);
  const dragonLogo = useRef(null);
  const splash = document.querySelector(".splash"),
    splashTitles = document.querySelectorAll(".splash_row_text > h1"),
    splashSubTitles = document.querySelectorAll(".splash_row_text > h4"),
    splashSeparator = document.querySelectorAll(".splash_row_separator"),
    splashMedia = document.querySelector(".splash_media");
  const splitAnimation = () => {
    Splitting({
      target: splashMedia,
      by: "cells",
      image: true,
      rows: 4,
      col: 1,
    });
  };
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({ defaults: { ease: "expo.out" } });
      gsap.set(splashTitles, { y: "101%" });
      gsap.set(splashSubTitles, { autoAlpha: 0 });
      gsap.set(splashSeparator, { width: 0 });
      splitAnimation();
      t1.from(splash, {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .to(splashTitles, {
          duration: 1.75,
          y: 0,
          stagger: 0.055,
        })
        .to(splashSubTitles, {
          duration: 1,
          autoAlpha: 1,
          ease: "expo.in",
          stagger: 0.055,
        })
        .to(splashSeparator, { duration: 1.75, width: "100%", stagger: 0.095 })
        .fromTo(
          ".cell",
          { height: "100%", scale: 0.5 },
          {
            duration: 1.25,
            height: "100%",
            scale: 1,
            stagger: 0.025,
            ease: "expo.inOut",
          },
          0.5,
        )
        .to(splash, {
          yPercent: "-100",
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
      <section className="splash font-spaceGrotesk">
        <div className="splash_wrapper text-white">
          <div className="splash_media">
            <figure className="splash_figure">
              <img
                src="/src/assets/cherryblossom.jpg"
                alt="Splash Image"
                className="splash_image"
              />
            </figure>
          </div>
          <div className="absolute z-10 top-0 left-0 w-full">
            <div className="splash_row">
              <div className="splash_row_text">
                <h1>Software Developer</h1>
                <h4>Web Dev</h4>
              </div>
              <div className="splash_row_separator"></div>
            </div>
            <div className="splash_row">
              <div className="splash_row_text">
                <h1>UX/UI Design</h1>
                <h4>Visuals/Animations</h4>
              </div>
              <div className="splash_row_separator"></div>
            </div>
            <div className="splash_row">
              <div className="splash_row_text">
                <h1>Data Analyst</h1>
                <h4>Reporting</h4>
              </div>
              <div className="splash_row_separator"></div>
            </div>
            <div className="splash_row">
              <div className="splash_row_text">
                <h1>Freelancer</h1>
                <h4>Digitizing Ideation</h4>
              </div>
              <div className="splash_row_separator"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="absolute -z-40 top-0 left-0 h-screen w-full flex flex-col justify-center items-center overflow-x-hidden bg-teal-600">
        <img
          ref={dragonLogo}
          src={logo}
          alt="logo"
          className="rounded-full cursor-pointer shadow-md"
          width="100px"
          height="100px"
        />
        <h1
          id="welcome"
          className="text-9xl font-bold text-white font-spacegrotesk uppercase"
        >
          enter the dragon
        </h1>
      </section>
    </div>
  );
}

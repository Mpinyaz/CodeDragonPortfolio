import "./HomeReveal.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import { animateHomeReveal } from "./animations";
import { IoSunnyOutline } from "react-icons/io5";
export function HomeReveal() {
  const [isActive, setIsActive] = useState(false);
  const homeRevealRef = useRef(null);
  const tlLeft = gsap.timeline({ defaults: { ease: "expo.inOut" } });

  const tlRight = gsap.timeline();
  const initAnimation = () => {
    const panel = document.querySelector(".home_reveal_left_container");
    const homeRevealLeftContainerTitle = document.querySelectorAll(
      ".home_reveal_left_container_title > .ofh > h1",
    );
    const homeLeftSvg = document.querySelector(
      ".home_reveal_left_container_rect_image",
    );
    const button = document.querySelector(".home_teal");
    tlLeft
      .to(panel, { duration: 1.5, y: "100%" }, 0.05)
      .to(
        homeRevealLeftContainerTitle,
        { duration: 0.9, y: "-100%", stagger: 0.025 },
        0,
      )
      .fromTo(
        homeLeftSvg,
        { autoAlpha: 0, rotate: 0 },
        { autoAlpha: 1, rotate: 360, duration: 3 },
      )
      .to(
        [button, ".home_teal_text"],
        { duration: 1.5, color: "orange", backgroundColor: "black" },
        0,
      );

    const homeRevealRightContainerTitle = document.querySelectorAll(
      ".home_reveal_right_container_title > .ofh > h1",
    );
    const homeRevealRightContainerParagraph = document.querySelector(
      ".home_reveal_right_container_paragraph > p",
    );
    gsap.set(
      [homeRevealRightContainerTitle, homeRevealRightContainerParagraph],
      {
        y: "-100%",
      },
    );
    tlRight
      .to(".reveal_top", {
        duration: 1.5,
        y: "-100%",
        ease: "expo.inOut",
      })
      .to(
        [homeRevealRightContainerTitle, homeRevealRightContainerParagraph],
        { duration: 3, y: 0, ease: "power4.out", stagger: 0.025 },
        0.05,
      );
    return gsap.timeline({ paused: true }).add(tlLeft, 0).add(tlRight, 0);
  };

  const handleAnimation = () => {
    if (!isActive) {
      masterTl.play();
    } else {
      masterTl.reverse();
    }
    setIsActive(!isActive);
  };
  const [masterTl, setTween] = useState(null);
  useEffect(() => {
    setTween(initAnimation());
  }, []);
  return (
    <section ref={homeRevealRef} className="home_reveal_container">
      <div className="home_teal" onClick={handleAnimation}>
        <div className="home_teal_wrapper">
          <span className="home_teal_text text-white font-extrabold">
            Let's Go
          </span>
          <div class="pulsating-circle"></div>
        </div>
      </div>
      <section className="home_reveal">
        <div className="home_reveal_wrapper">
          <div className="home_reveal_left">
            <div className="home_reveal_left_container z-50">
              <div className="home_reveal_left_container_title text-white">
                <div className="ofh">
                  <h1>Join me</h1>
                </div>
                <div className="ofh">
                  <h1>in exploring everything about</h1>
                </div>
                <div className="ofh">
                  <h1>Web Design,Data Analytics, </h1>
                </div>
                <div className="ofh">
                  <h1>and Finance</h1>
                </div>
              </div>
            </div>
            <div className="home_reveal_left_container z-40">
              <div className="home_reveal_left_container_grid">
                <img
                  src="/src/assets/animegirl.jpg"
                  alt="animegirl"
                  className="h-full object-cover"
                />
              </div>
              <div className="home_reveal_left_container_rect">
                <IoSunnyOutline
                  className="home_reveal_left_container_rect_image"
                  color={"white"}
                />
              </div>
            </div>
            <div className="home_reveal_left_tag">
              <div className="text-white font-extrabold">
                {"[DIGITIZE -"} {"IDEAS]"}
              </div>
            </div>
            <div className="home_reveal_left_side text-white">
              <div className="home_reveal_marque font-extrabold">
                <ul className="home_reveal_marque_inner">
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                </ul>
                <ul className="home_reveal_marque_inner">
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="home_reveal_right">
            <div className="home_reveal_right_container z-40">
              <div className="home_reveal_right_container_tag">
                <span>Elton Mpinyuri</span>
              </div>
              <div className="home_reveal_right_container_title">
                <div className="ofh">
                  <h1>Go Beyond</h1>
                </div>
                <div className="ofh">
                  <h1>Your level</h1>
                </div>
              </div>
              <div className="home_reveal_right_container_paragraph">
                <p>
                  Engineer valued for driving high-performance accessible web
                  experiences. I design quality, user-friendly and scalable
                  products regardless of stack.
                </p>
              </div>
            </div>
            <div className="home_reveal_right_container z-50 reveal_top">
              <figure className="home_reveal_right_container_media">
                <img
                  src="/src/assets/fiercedragon.jpeg"
                  alt="Planet"
                  className="home_reveal_right_container_media_image"
                />
              </figure>
            </div>
            <div className="home_reveal_right_side">
              <div className="home_reveal_marque text-white font-extrabold">
                <ul className="home_reveal_marque_inner">
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                </ul>
                <ul className="home_reveal_marque_inner">
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

import "./Greeter.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export function Greeter() {
  const textRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const greeting = new SplitType("#greeting");
    greeting.chars;
    const greetingChar = document.querySelectorAll("#greeting .char");
    for (let i = 0; i < greetingChar.length; i++) {
      greetingChar[i].style.transform = "translateY(-200%)";
    }
    gsap.to("#greeting .char", {
      y: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5,
    });
    const splitTypes = document.querySelectorAll(".reveal-type");
    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "words" });
      gsap.from(text.words, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: false,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
        duration: 5,
        delay: 1 * i,
      });
    });
  }, []);
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="basis-1/4 p-2 flex justify-center">
          <img
            height="200px"
            width="200px"
            className="portoimg"
            src="src/images/Elton.jpeg"
          />
        </div>
        <div className="basis-3/4 text-white">
          <ReactLenis ref={textRef} autoRaf={false}>
            <h1 id="greeting" className="text-5xl font-bold mb-2">
              {"Hello There!, I'm Elton"}
            </h1>
            <p className="reveal-type p-0">
              A versatile professional, adept at both Software Development and
              Financial Analysis. Specializing as a Full Stack Developer, I
              excel in crafting dynamic websites and hybrid mobile applications,
              proficient in JavaScript, TypeScript, Angular, React, and C#.
              Simultaneously, my background as a Financial Analyst brings
              expertise in financial modeling, budgeting, and forecasting,
              contributing to strategic decision-making with insightful analysis
              and reporting. Eager to tackle new challenges and committed to
              expanding my skill set across both domains.
            </p>
          </ReactLenis>
        </div>
      </div>
    </>
  );
}

export default Greeter;

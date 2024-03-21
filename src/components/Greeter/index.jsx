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
      const text = new SplitType(char, { types: "chars" });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: false,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
        duration: 0.001,
        delay: i * 0.1,
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
            <h1 id="greeting" className="text-3xl">
              Hello There! ;)
            </h1>
            <p className="reveal-type">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          </ReactLenis>
        </div>
      </div>
    </>
  );
}

export default Greeter;

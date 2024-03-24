import "./Greeter.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { greeterAnimation } from "./animations";
import { descAnimationScroll } from "./animations";
export function Greeter() {
  const greeterContainer = useRef(null);
  const greeter = useRef(null);
  const greeterDesc = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      const gTl = gsap.timeline();
      gTl.add(
        greeterAnimation(greeter).add(descAnimationScroll(greeterDesc), "+=1")
      );
    },
    { scope: greeterContainer }
  );

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
          <ReactLenis ref={greeterContainer} autoRaf={false}>
            <h1 id="greeting" ref={greeter} className="text-5xl font-bold mb-2">
              {"Hello There!, I'm Elton"}
            </h1>
            <p ref={greeterDesc} className="reveal-type p-0">
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

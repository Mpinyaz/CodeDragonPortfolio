import useDocumentTitle from "../../context/useDocumentTitle";
import { Experience } from "../../components/Experience";
import { Education } from "../../components/Education";
import { Greeter } from "../../components/Greeter";
import { Services } from "../../components/Services";
import gsap from "gsap";
import { rotateTitleAnimation } from "./animations";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "./Home.css";
import SmoothScrolling from "../../utils/SmoothScrolling";

function Home() {
  useDocumentTitle("Code Dragon");
  const home = useRef(null);
  useGSAP(
    () => {
      const homeTl = gsap.timeline();
      homeTl.add(rotateTitleAnimation());
    },
    { section: home },
  );
  return (
    <>
      <SmoothScrolling>
        <div ref={home} className="flex flex-col items-center gap-y-8">
          <section className="greeter w-3/4">
            <Greeter />
          </section>
          <section className="services w-3/4">
            <Services />
          </section>
          <section className="experience w-3/4">
            <Experience />
          </section>
          <section className="education w-3/4">
            <Education />
          </section>
        </div>
      </SmoothScrolling>
    </>
  );
}

export default Home;

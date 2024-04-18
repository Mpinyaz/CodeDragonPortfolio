import React from "react";
import { SkillsCollage } from "../../components/Skills";
import "./Skills.css";
import Carousel from "../../components/Carousel";

function Skills() {
  return (
    <>
      <div className="card mt-5 flex flex-col items-center mx-16 p-2 my-6">
        <section className="text-white flex flex-col xl:flex-row mx-60 mb-6 items-start lg:items-start gap-4">
          <h1 className="basis-1/2 text-5xl font-extrabold">
            {"CodeDragon - Where Coding"}
            <br />
            <span>Meets Creativity</span>
          </h1>
          <div className="basis-1/2 flex flex-col">
            <h1 className="text-2xl mb-3 font-semibold">
              {"Skills & Experience"}
            </h1>
            <span className="mb-3">
              {
                "I'm Elton, a Software developer on a mission to turn challenges into opportunities. With a keen eye for design and a love for clean code, I specialize in crafting engaging and user-friendly web experiences."
              }
            </span>
            <span className="blinking-cursor">
              <h1 className="text-3xl italic">
                {`"A problem is a chance for you to do your best."` +
                  " - Duke Ellington"}
                <span>|</span>
              </h1>
            </span>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row lg:items-start items-center box-border m-0 p-2 my-5 justify-start space-x-3 w-auto">
          <h1 className="font-extrabold text-white text-4xl text-start">
            Tooling:
          </h1>
          <Carousel />
        </section>
        <SkillsCollage />
      </div>
    </>
  );
}

export default Skills;

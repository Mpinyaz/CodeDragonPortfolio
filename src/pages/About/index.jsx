import { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import "./About.css";
import useDocumentTitle from "/src/context/useDocumentTitle";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

const About = () => {
        useDocumentTitle("About");
        const [vantaEffect, setVantaEffect] = useState(0);
        const vantaRef = useRef(null);
        const [isAnimating, setIsAnimating] = useState(false);
        useEffect(() => {
                if (!vantaEffect) {
                        setVantaEffect(
                                HALO({
                                        el: vantaRef.current,
                                        THREE: THREE,
                                        mouseControls: true,
                                        touchControls: true,
                                        gyroControls: false,
                                        minHeight: 600.0,
                                        minWidth: 600.0,
                                        backgroundColor: 0x431343,
                                        yOffset: 0.19,
                                        size: 1.6,
                                        amplitudeFactor: 2.1,
                                        scale: 1.0,
                                        scaleMobile: 1.0,
                                        color1: "#ff0000",
                                        color2: "#00ff00",
                                }),
                        );
                }
                return () => {
                        if (vantaEffect) vantaEffect.destroy();
                };
        }, [vantaEffect]);
        gsap.registerPlugin(CustomEase);
        CustomEase.create("cubic", "0.83, 0, 0.17,1");

        const splitTextIntoSpans = (selector) => {
                let elements = document.querySelectorAll(selector);
                elements.forEach((element) => {
                        let text = element.innerText;
                        let splitText = text
                                .split("")
                                .map((char) => {
                                        return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
                                })
                                .join("");
                        element.innerHTML = splitText;
                });
        };

        function initializeCards() {
                let cards = gsap.utils.toArray(".abt-card");
                gsap.to(cards, {
                        duration: 1,
                        y: (i) => -15 + 15 * i + "%",
                        z: (i) => 15 * i,
                        stagger: -0.1,
                        ease: "cubic",
                });
        }
        // document.addEventListener("DOMContentLoaded", () => {
        //         splitTextIntoSpans(".abt-copy h1");
        //         initializeCards();
        //
        //         gsap.set(".abt-card h1 span", { y: -200, opacity: 0 });
        //         gsap.set(".abt-slider .abt-card:last-child h1 span", { y: 0 });
        // });
        useEffect(() => {
                splitTextIntoSpans(".abt-copy h1");
                initializeCards();

                gsap.set(".abt-card h1 span", { y: -200 });
                gsap.set(".abt-slider .abt-card:last-child h1 span", { y: 0 });
        }, []);

        useEffect(() => {
                const handleClick = () => {
                        if (isAnimating) return;
                        setIsAnimating(true);

                        const cards = Array.from(document.querySelectorAll(".abt-card"));
                        const slider = document.querySelector(".abt-slider");
                        const lastCard = cards.pop();
                        const nextCard = cards[cards.length - 1];

                        gsap.to(lastCard.querySelectorAll("h1 span"), {
                                duration: 0.75,
                                y: 200,
                                stagger: 0.1,
                                ease: "cubic",
                        });

                        gsap.from(lastCard.querySelector("p"), { opacity: 0.75, duration: 1 });

                        gsap.to(lastCard, {
                                y: "+=150%",
                                duration: 0.75,
                                ease: "cubic",
                                onComplete: () => {
                                        slider.prepend(lastCard);
                                        initializeCards(); // Assuming this function is defined elsewhere
                                        gsap.set(".abt-card h1 span", { y: -200 });
                                        setTimeout(() => {
                                                setIsAnimating(false);
                                        }, 1000);
                                },
                        });

                        gsap.to(nextCard.querySelectorAll("h1 span"), {
                                y: 0,
                                duration: 1,
                                stagger: 0.05,
                                ease: "cubic",
                        });
                };

                document.addEventListener("click", handleClick);

                return () => {
                        document.removeEventListener("click", handleClick);
                };
        }, [isAnimating]);
        return (
                <>
                        <div className="w-full overflow-hidden" ref={vantaRef}>
                                <div className="abt-container">
                                        <div className="abt-slider text-white">
                                                <div className="abt-card">
                                                        <img src="src/images/trading-graph.jpeg" alt="Profile Pic" />
                                                        <div className="abt-copy flex flex-col items-center p-5">
                                                                <h1 className="text-fuchsia-600 font-spaceGrotesk font-extrabold text-center relative text-5xl uppercase">
                                                                        Finance
                                                                </h1>
                                                                <p className=" w-1/2 card font-spaceGrotesk text-center relative text-2xl italic">
                                                                        Software developer
                                                                        <br />
                                                                        Data Analyst
                                                                </p>
                                                        </div>
                                                </div>

                                                <div className="abt-card">
                                                        <img src="src/assets/purp-planet.jpeg" alt="" />
                                                        <div className="abt-copy flex flex-col items-center p-6">
                                                                <h1 className="font-spaceGrotesk  font-extrabold text-teal-600 text-center relative text-5xl uppercase">
                                                                        Web Designer
                                                                </h1>
                                                                <p className="w-3/4 card font-spaceGrotesk text-center relative text-2xl italic">
                                                                        I'm probably not the typical designer positioned behind an
                                                                        Illustrator artboard adjusting pixels, but I design. Immersed
                                                                        in stylesheets tweaking font sizes and contemplating layouts
                                                                        is where you'll find me. I'm committed to creating fluent user
                                                                        experiences while staying fashionable.
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className="abt-card">
                                                        <img src="src/assets/waves.jpeg" alt="" />
                                                        <div className="abt-copy flex flex-col items-center p-5">
                                                                <h1 className="text-red-600 font-spaceGrotesk font-extrabold text-center relative text-5xl uppercase">
                                                                        Frontend Developer.
                                                                </h1>
                                                                <p className=" w-1/2 card font-spaceGrotesk text-center relative text-2xl italic card">
                                                                        I like to craft solid and scalable frontend products with
                                                                        <br />
                                                                        great user experiences.
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className="abt-card">
                                                        <img src="src/assets/Elton.jpeg" alt="Profile Pic" />
                                                        <div className="abt-copy flex flex-col items-center p-5">
                                                                <h1 className="text-fuchsia-600 font-spaceGrotesk font-extrabold text-center relative text-5xl uppercase">
                                                                        Elton Mpinyuri
                                                                </h1>
                                                                <p className=" w-1/2 card font-spaceGrotesk text-center relative text-2xl italic">
                                                                        Software developer
                                                                        <br />
                                                                        Data Analyst
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        );
};

export default About;

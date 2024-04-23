import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
// import "./SplashScreen.css";
import React from "react";

// export function SplashScreen() {
//   const comp = useRef(null);
//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       const t1 = gsap.timeline();
//       const t2 = gsap.timeline();
//       const loader = document.querySelector(".splash_loader");
//       const loaderItem = document.querySelectorAll(".splash_loader__item");
//       t1.from("#intro-slider", {
//         xPercent: "-100",
//         duration: 1.3,
//         delay: 0.3,
//       })
//         .from(["#title-1", "#title-2", "#title-3"], {
//           opacity: 0,
//           y: "+=30",
//           stagger: 0.5,
//         })
//         .to(["#title-1", "#title-2", "#title-3"], {
//           opacity: 0,
//           y: "-=30",
//           delay: 0.3,
//           stagger: 0.5,
//         })
//         .to("#intro-slider", {
//           xPercent: "-100",
//           duration: 1.3,
//         });
//
//       gsap.set(loaderItem, {
//         duration: 0.5,
//         scaleX: 0,
//         transformOrigin: "0% 0%",
//       });
//
//       t2.to(loaderItem, {
//         duration: 0.5,
//         scaleX: 0,
//         transformOrigin: "100% 100%",
//         stagger: 0.02,
//         ease: "power3.out",
//       })
//         .to(
//           ".gs_anim1",
//           {
//             duration: 1,
//             x: 0,
//             opacity: 1,
//             stagger: 0.1,
//             ease: "power3.out",
//           },
//           "-=.6",
//         )
//         .to(
//           ".gs_anim2",
//           {
//             duration: 0.8,
//             clipPath: "polygon(0 0, 100% 0%, 100% 100%,0% 100%)",
//           },
//           "-=.8",
//         );
//
//       t1.add(t2, ">+=1");
//     }, comp);
//     return () => ctx.revert();
//   }, []);
//   return (
//     <div className="relative" ref={comp}>
//       <div
//         id="intro-slider"
//         className="h-screen p-10 bg-teal-700 absolute font-extrabold top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight"
//       >
//         <h1 className="text-9xl text-white" id="title-1">
//           Software Engineer
//         </h1>
//         <h1 className="text-9xl text-white" id="title-2">
//           Designer
//         </h1>
//         <h1 className="text-9xl text-white" id="title-3">
//           Freelancer
//         </h1>
//       </div>
//       <div className="h-screen">
//         <div className="splash_loader">
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//           <div className="splash_loader__item"></div>
//         </div>
//       </div>
//       <div className="h-screen">
//         <div className="wrapp">
//           <div className="splash_header">
//             <div className="splash_header__bl">
//               <h1 className="splash_title">
//                 <div className="title__line gs_anim1">
//                   <span>Welcome To</span>
//                   <div className="splash_title_img gs_anim2">
//                     <img src="/src/assets/purp-planet.jpeg" alt="Globe" />
//                   </div>
//                 </div>
//                 <div className="title__line gs_anim1">
//                   <div className="splash_title_img gs_anim2">
//                     <img src="/src/assets/purp-planet.jpeg" alt="Globe" />
//                   </div>
//                   <span className="color">CodeDragon</span>
//                 </div>
//               </h1>
//               <div className="splash_background gs_anim2">
//                 <img src="/src/assets/purp-planet.jpeg" alt="Globe" />
//               </div>
//             </div>
//             <div className="splash_header__footer">
//               <div className="splash_header__footer-wrapp">
//                 <div className="splash_header__footer-text gs_anim3">
//                   <div className="splash_header__footer-img">
//                     <img src="src/assets/star.svg" alt="" />
//                   </div>
//                   Lets GO
//                   <br /> !!!!!!!
//                 </div>
//                 <div className="splash_header__footer-text gs_anim3 uppercase">
//                   <span className="color">a</span>v
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//
export function SplashScreen() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      const t2 = gsap.timeline();
      const loader = document.querySelector(".splash_loader");
      const loaderItem = document.querySelectorAll(".splash_loader__item");
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
        });

      gsap.set(loaderItem, {
        duration: 0.5,
        scaleX: 0,
        transformOrigin: "100% 100%",
      });

      t2.to(loaderItem, {
        duration: 0.5,
        scaleX: 0,
        transformOrigin: "0% 0%",
        stagger: 0.02,
        ease: "power3.out",
      })
        .to(
          ".gs_anim1",
          {
            duration: 1,
            x: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=.6",
        )
        .to(
          ".gs_anim2",
          {
            duration: 0.8,
            clipPath: "polygon(0 0, 100% 0%, 100% 100%,0% 100%)",
          },
          "-=.8",
        );

      t1.add(t2, ">+=1");
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-teal-700 absolute font-extrabold top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight"
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
      <div className="h-screen">
        <div className="splash_loader">
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
          <div className="splash_loader__item"></div>
        </div>
      </div>
      <div className="h-screen">
        <div className="wrapp bg-[#FDF0D0]">
          <div className="splash_header">
            <div className="splash_header__bl">
              <h1 className="splash_title">
                <div className="title__line gs_anim1">
                  <span>Welcome To</span>
                  <div className="splash_title_img gs_anim2">
                    <img src="/src/assets/purp-planet.jpeg" alt="Globe" />
                  </div>
                </div>
                <div className="title__line gs_anim1">
                  <div className="splash_title_img gs_anim2">
                    <img src="/src/assets/purp-planet.jpeg" alt="Globe" />
                  </div>
                  <span className="color">CodeDragon</span>
                </div>
              </h1>
              <div className="splash_background gs_anim2">
                <img src="/src/assets/purp-planet.jpeg" alt="Globe" />
              </div>
            </div>
            <div className="splash_header__footer">
              <div className="splash_header__footer-wrapp">
                <div className="splash_header__footer-text gs_anim3">
                  <div className="splash_header__footer-img">
                    <img src="src/assets/star.svg" alt="" />
                  </div>
                  Lets GO
                  <br /> !!!!!!!
                </div>
                <div className="splash_header__footer-text gs_anim3 uppercase">
                  <span className="color">a</span>v
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

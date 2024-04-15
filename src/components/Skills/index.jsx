import "./Skills.css";
export function SkillsCollage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-3/4">
        <div className="grid skills relative  w-full">
          <img
            src="/src/assets/web-design.jpg"
            alt="skills"
            className="rounded-lg w-full h-[400px] lg:h-full  object-fit"
          />
          <div className="absolute top-1/4 left-1/2">
            <h1 className="font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
              Web Design
            </h1>
            <p className="text-white">Crafting Exceptional Web Expriences</p>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-3">
          <div className="grid skills relative text-center">
            <img
              src="/src/assets/coded.jpg"
              alt="skills"
              className="rounded-lg w-full object-fit"
            />
            <div className="absolute top-1/4 left-1/2">
              <h1 className="font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
                Web Developer
              </h1>
              <p className="text-white">Crafting Exceptional Web Expriences</p>
            </div>
          </div>
          <div className="grid skills relative">
            <img
              src="/src/assets/problem-solver.jpg"
              alt="skills"
              className="rounded-lg w-full object-fit"
            />
            <div className="absolute top-1/4 left-1/2">
              <h1 className=" font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
                Problem Solver
              </h1>
              <p className="text-white">
                Solving Complex Challenges with Precision
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

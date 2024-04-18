import "./Skills.css";
export function SkillsCollage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-3/4">
        <div className="grid skills relative  w-full">
          <img
            src="/src/assets/web-design.jpg"
            alt="skills"
            className="rounded-lg w-full h-full  object-fit"
          />
          <div className="absolute top-1/2 left-1/2">
            <h1 className="font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
              Software development
            </h1>
            <p className="card text-white  text-center p-2 font-bold">
              Experienced in both functional and OOP languages.
            </p>
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
              <p className="text-white card text-center p-2 font-bold">
                Passionate about UI/UX. Experienced in crafting exceptional web
                expriences.
              </p>
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
              <p className="text-white card text-center p-2 font-bold">
                Solving Complex Challenges with Precision
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

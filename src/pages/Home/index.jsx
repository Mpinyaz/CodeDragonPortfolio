import useDocumentTitle from "../../context/useDocumentTitle";
import { Experience } from "../../components/Experience";
import { Education } from "../../components/Education";
import "./Home.css";

function Home() {
  useDocumentTitle("Code Dragon");
  return (
    <>
      <div className="flex flex-col items-center">
        <section className="experience w-3/4">
          <Experience />
        </section>
        <section className="education w-3/4">
          <Education />
        </section>
      </div>
    </>
  );
}

export default Home;

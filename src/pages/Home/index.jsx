import useDocumentTitle from "../../context/useDocumentTitle";
import { Experience } from "../../components/Experience";
import { Education } from "../../components/Education";
import "./Home.css";

function Home() {
  useDocumentTitle("Code Dragon");
  return (
    <>
      <section className="experience">
        <Experience />
      </section>
      <section className="education">
        <Education />
      </section>
    </>
  );
}

export default Home;

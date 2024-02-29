import PageModal from "../components/PageModal";
import Email from "../components/Contact/Contact";
import useDocumentTitle from "../context/useDocumentTitle";
function Home() {
  useDocumentTitle("Code Dragon");
  return (
    <>
      <div>Home</div>
      <PageModal />
      <Email />
    </>
  );
}

export default Home;

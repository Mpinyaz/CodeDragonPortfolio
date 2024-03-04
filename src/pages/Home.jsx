import PageModal from "../components/PageModal";
import useDocumentTitle from "../context/useDocumentTitle";
function Home() {
  useDocumentTitle("Code Dragon");
  return (
    <>
      <div>Home</div>
      <PageModal />
    </>
  );
}

export default Home;

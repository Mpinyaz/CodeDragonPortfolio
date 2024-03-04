import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Suspense } from "react";
import CustomLoader from "../components/Loader";

const BaseLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Suspense fallback={<CustomLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default BaseLayout;

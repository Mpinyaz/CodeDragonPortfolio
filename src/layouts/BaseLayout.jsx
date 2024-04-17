import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Suspense } from "react";
import CustomLoader from "../components/Loader";
import SmoothScrolling from "../utils/SmoothScrolling";
const BaseLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Suspense fallback={<CustomLoader />}>
        <SmoothScrolling>
          <Outlet />
        </SmoothScrolling>
      </Suspense>
      <Footer />
    </div>
  );
};

export default BaseLayout;

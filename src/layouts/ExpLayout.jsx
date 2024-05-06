import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Suspense } from "react";
import CustomLoader from "../components/Loader";
const ExpLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Suspense fallback={<CustomLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default ExpLayout;

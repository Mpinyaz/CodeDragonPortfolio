import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import CustomLoader from "../components/Loader";
function HomeLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Suspense fallback={<CustomLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default HomeLayout;

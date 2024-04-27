import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import CustomLoader from "../components/Loader";
import { Cursor } from "../components/Cursor";
function HomeLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Cursor />
      <Suspense fallback={<CustomLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default HomeLayout;

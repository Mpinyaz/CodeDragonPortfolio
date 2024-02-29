import BaseLayout from "../layouts/BaseLayout";
import { lazy } from "react";
import NoMatch from "../components/NoMatch";

import About from "../pages/About/";
const Home = lazy(() => import("../pages/Home"));
const Contact = lazy(() => import("../pages/Contact"));

export const PathConstants = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
};

const routes = [
  {
    path: PathConstants.HOME,
    element: <BaseLayout />,
    errorElement: <NoMatch />,
    children: [
      { path: PathConstants.HOME, element: <Home /> },
      { path: PathConstants.ABOUT, element: <About /> },
      { path: PathConstants.CONTACT, element: <Contact /> },
    ],
  },
];

export default function privateRoutes() {
  return routes;
}

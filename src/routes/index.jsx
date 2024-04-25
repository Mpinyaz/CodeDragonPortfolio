import BaseLayout from "../layouts/BaseLayout";
import HomeLayout from "../layouts/homeLayout";

import { lazy } from "react";
import NoMatch from "../components/Error404";

import About from "../pages/About/";
const Home = lazy(() => import("../pages/Home"));
const Contact = lazy(() => import("../pages/Contact"));
const Skills = lazy(() => import("../pages/Skills"));
const Experience = lazy(() => import("../pages/Experience"));

export const PathConstants = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  SKILLS: "/skills",
  EXPERIENCE: "/experience",
};

const routes = [
  {
    element: <HomeLayout />,
    children: [{ path: PathConstants.HOME, element: <Home /> }],
  },

  {
    element: <BaseLayout />,
    errorElement: <NoMatch />,
    children: [
      { path: PathConstants.ABOUT, element: <About /> },
      { path: PathConstants.CONTACT, element: <Contact /> },
      { path: PathConstants.EXPERIENCE, element: <Experience /> },
      { path: PathConstants.SKILLS, element: <Skills /> },
    ],
  },
];

export default function privateRoutes() {
  return routes;
}

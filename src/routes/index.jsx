import BaseLayout from "../layouts/BaseLayout";
import HomeLayout from "../layouts/homeLayout";
import ExpLayout from "../layouts/ExpLayout";
import NoMatch from "../components/Error404";
import About from "../pages/About/";
import Home from "./../pages/Home";
import Contact from "./../pages/Contact";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
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
    element: <ExpLayout />,
    children: [{ path: PathConstants.EXPERIENCE, element: <Experience /> }],
  },
  {
    element: <BaseLayout />,
    errorElement: <NoMatch />,
    children: [
      { path: PathConstants.ABOUT, element: <About /> },
      { path: PathConstants.CONTACT, element: <Contact /> },
      { path: PathConstants.SKILLS, element: <Skills /> },
    ],
  },
];

export default function privateRoutes() {
  return routes;
}

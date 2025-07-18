import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home";
import ProjectDetails from "../Components/Home/Projects/ProjectDetails";
import About from "../Components/Home/About Me/About";
import Skills from "../Components/Home/Skills/Skills";
import Projects from "../Components/Home/Projects/Projects";
import Contact from "../Components/Home/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Shared layout
    children: [
      {
        path: "/", // Home route
        element: <Home />,
      },
      {
        path: "project/:id", // Now inside Main layout
        element: <ProjectDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;

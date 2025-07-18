import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home";
import ProjectDetails from "../Components/Home/Projects/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project/:id", // Add dynamic project route
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default router;

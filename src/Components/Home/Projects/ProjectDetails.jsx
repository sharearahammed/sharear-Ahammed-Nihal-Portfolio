import { useParams } from "react-router-dom";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";

const ProjectDetails = () => {
  const { id } = useParams();

  const renderProject = () => {
    switch (id) {
      case "1":
        return <ProjectOne />;
      case "2":
        return <ProjectTwo />;
      case "3":
        return <ProjectThree />;
      case "4":
        return <ProjectFour />;
      default:
        return <p className="text-center text-red-500">Project not found.</p>;
    }
  };

  return <div className="mt-10">{renderProject()}</div>;
};

export default ProjectDetails;

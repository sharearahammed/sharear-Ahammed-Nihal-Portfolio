import { useLocation, useParams } from "react-router-dom";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";
import Navbar from "../../Shreared/Navbar/Navbar";

const ProjectDetails = () => {
  const { id } = useParams();
  const renderProject = () => {
    switch (id) {
      case "1":
        return <ProjectFour />;
      case "2":
        return <ProjectOne />;
      case "3":
        return <ProjectTwo />;
      case "4":
        return <ProjectThree />;

      default:
        return <p className="text-center text-red-500">Project not found.</p>;
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
      </div>
      <div className="px-4 md:px-0">{renderProject()}</div>
    </>
  );
};

export default ProjectDetails;

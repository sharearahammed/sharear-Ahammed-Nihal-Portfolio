import ProjectOne from "./ProjectOne";
import ProjectThree from "./ProjectThree";
import ProjectTwo from "./ProjectTwo";

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-center mb-10">
        <h1 className="text-xl md:text-5xl font-bold mb-3">My Projects</h1>
        <p className="text-[14px] md:text-xl">Take a look at my projects</p>
      </div>
      <div className="">
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
      </div>
    </div>
  );
};

export default Projects;

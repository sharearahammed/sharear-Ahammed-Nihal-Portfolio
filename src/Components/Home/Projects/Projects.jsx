import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projectCards = [
    {
      id: 1,
      title: "Micro Task & Earning",
      img: "/projectCollage1.png",
      description: "Crowdsourcing platform for tasks & earnings.",
    },
    {
      id: 2,
      title: "Hotel Room Booking",
      img: "/Project2Collage1.png",
      description: "Book, review & manage hotel rooms securely.",
    },
    {
      id: 3,
      title: "Tourism Management",
      img: "/Project3Collage1.png",
      description: "Tourist info & destination guide for Asia.",
    },
    {
      id: 4,
      title: "Fly Far International",
      img: "/FFIimgOne.png", 
      description:
        "Responsive flight booking system with OTP, CRUD operations, and ZIP downloads. Built using React, Redux & Material UI.",
    },
  ];

  return (
    <div id="projects" className="py-12 px-5 md:px-5 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 text-[#0077B6] dark:text-blue-400">
          My Projects
        </h1>
        <p className="text-[14px] md:text-lg text-gray-600 dark:text-gray-300">
          Explore some of the projects I’ve built
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectCards.map(({ id, title, img, description }) => (
          <div
            key={id}
            onClick={() => navigate(`/project/${id}`)}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 pt-5 px-3"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-56 object-cover transform hover:scale-105 transition duration-300"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-[#0077B6] dark:text-blue-400 mb-2">
                {title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
              <div className="mt-4 text-right">
                <button className="text-sm text-blue-600 dark:text-blue-300 hover:underline">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

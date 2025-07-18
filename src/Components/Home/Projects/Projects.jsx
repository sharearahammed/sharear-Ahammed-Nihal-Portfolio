import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const projectCards = [
    {
      id: 1,
      title: "Fly Far International",
      img: "/FFIimgOne.png",
      description:
        "Responsive flight booking system with OTP, CRUD operations, and ZIP downloads. Built using React, Redux & Material UI.",
    },
    {
      id: 2,
      title: "Micro Task & Earning",
      img: "/projectCollage1.png",
      description: "Crowdsourcing platform for tasks & earnings.",
    },
    {
      id: 3,
      title: "Hotel Room Booking",
      img: "/Project2Collage1.png",
      description: "Book, review & manage hotel rooms securely.",
    },
    {
      id: 4,
      title: "Tourism Management",
      img: "/Project3Collage1.png",
      description: "Tourist info & destination guide for Asia.",
    },
  ];

  return (
    <div id="projects" className="pt-24 md:mt-0 md:pt-28 mb-20 md:px-5 lg:px-5">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 text-[#0077B6] dark:text-blue-400">
          My Projects
        </h1>
        <p className="text-[14px] md:text-lg text-gray-600 dark:text-gray-300">
          Explore some of the projects I’ve built
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {projectCards.map(({ id, title, img, description }) => (
          <div
            key={id}
            className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-56 object-cover transform hover:scale-105 transition duration-300 pt-1 rounded-xl"
            />

            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-[#0077B6] dark:text-blue-400 mb-2">
                {title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                {description}
              </p>
              <div className="mt-auto text-right">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(`/project/${id}`);
                  }}
                  className="text-sm text-blue-600 dark:text-blue-300 hover:underline"
                >
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

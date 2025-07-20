import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const projectCards = [
    {
      id: 1,
      title: "Fly Far International",
      img: "/FFIimgOne.png",
      description:
        "Responsive flight booking system with OTP, CRUD operations, and ZIP downloads. Built using React, Redux & Material UI.",
      stack: ["React", "Redux", "Material UI", "API Integration"],
    },
    {
      id: 2,
      title: "Micro Task & Earning",
      img: "/projectCollage1.png",
      description: "Crowdsourcing platform for tasks & earnings.",
      stack: ["React JS", "Firebase", "MongoDB", "Tailwind CSS", "NodeJS"],
    },
    {
      id: 3,
      title: "Hotel Room Booking",
      img: "/Project2Collage1.png",
      description: "Book, review & manage hotel rooms securely.",
      stack: ["React JS", "Firebase", "MongoDB", "Tailwind CSS", "NodeJS"],
    },
    {
      id: 4,
      title: "Tourism Management",
      img: "/Project3Collage1.png",
      description: "Tourist info & destination guide for Asia.",
      stack: ["React JS", "Firebase", "MongoDB", "Tailwind CSS", "NodeJS"],
    },
  ];

  return (
    <div
      id="projects"
      className="pt-24 md:pt-28 mb-20 px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      <div className="text-center mb-14">
        <h1 className="text-2xl md:text-5xl font-bold text-[#0077B6] dark:text-blue-400 mb-4">
          My Projects
        </h1>
        <p className="text-[14px] md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          A curated list of real-world applications built using modern full-stack technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectCards.map(({ id, title, img, description, stack }) => (
          <div
            key={id}
            data-aos="fade-up"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate(`/project/${id}`);
            }}
            className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Decorative background glow on hover */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-800 opacity-0 group-hover:opacity-30 transition duration-500" />

            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={img}
                alt={title}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="relative z-10 p-5 flex flex-col h-full">
              <h2 className="text-xl font-semibold text-[#0077B6] dark:text-blue-400 mb-2">
                {title}
              </h2>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                {description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {stack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-800 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto text-right">
                <span className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-300 hover:underline">
                  View Details →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

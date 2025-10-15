import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleClick = () => {
    navigate("/contact");
  };

  const projectCards = [
    {
      id: 1,
      title: "Fly Far International",
      img: "/FFIimgOne.png",
      description:
        "Responsive flight booking system with OTP, CRUD operations, and ZIP downloads. Built using React, Redux & Material UI.",
      stack: ["React", "Redux", "Material UI", "API Integration"],
      featured: true,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Micro Task & Earning",
      img: "/projectCollage1.png",
      description: "Crowdsourcing platform for tasks & earnings.",
      stack: ["React JS", "Firebase", "MongoDB", "Tailwind CSS", "NodeJS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Hotel Room Booking",
      img: "/Project2Collage1.png",
      description: "Book, review & manage hotel rooms securely.",
      stack: ["React JS", "Firebase", "MongoDB", "Tailwind CSS", "NodeJS"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      title: "Tourism Management",
      img: "/Project3Collage1.png",
      description: "Tourist info & destination guide for Asia.",
      stack: ["React JS", "Firebase", "MongoDB", "Tailwind CSS", "NodeJS"],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Flight Search Box Clone",
      img: "/Project4Collage1.jpg",
      description:
        "Flight search box clone built with React, Tailwind CSS, and TypeScript.",
      stack: ["React JS", "Tailwind CSS", "TypeScript"],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div
      id="projects"
      className="relative pt-24 md:pt-28 mb-20 max-w-7xl mx-auto px-4"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Header Section */}
      <div className="relative text-center mb-20" data-aos="fade-down">
        <div className="inline-block mb-6">
          <div className="relative">
            <span className="text-sm font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 px-6 py-2.5 rounded-full border-2 border-blue-200 dark:border-blue-800 shadow-lg shadow-blue-500/20">
              ✨ Portfolio Showcase
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-[#0077B6] via-blue-600 to-cyan-600 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-400 bg-clip-text text-transparent inline-block animate-gradient">
            Featured Projects
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Explore my collection of innovative solutions built with cutting-edge
          technologies
          <br />
          <span className="text-base text-gray-500 dark:text-gray-500">
            Each project represents a unique challenge solved with creativity
          </span>
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-8 gap-4">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          <div className="h-1 w-16 bg-gradient-to-l from-transparent to-blue-500 rounded-full" />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {projectCards.map(
          ({ id, title, img, description, stack, featured, color }) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={id * 50}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate(`/project/${id}`);
              }}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 border border-gray-200/50 dark:border-gray-800/50"
              style={{
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 25px 60px rgba(0, 119, 182, 0.2)";
                e.currentTarget.style.borderColor = "rgba(0, 119, 182, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(0, 0, 0, 0.06)";
                e.currentTarget.style.borderColor = "";
              }}
            >
              {/* Animated Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
              />

              {/* Featured Badge */}
              {featured && (
                <div className="absolute top-4 left-4 z-30">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 blur-lg opacity-70 animate-pulse" />
                    <span className="relative bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5">
                      <span className="text-sm">⭐</span> Featured
                    </span>
                  </div>
                </div>
              )}

              {/* Image Container */}
              <div className="relative overflow-hidden h-60">
                {/* Multiple Gradient Overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 z-10 transition-opacity duration-500 mix-blend-overlay`}
                />

                {/* Image */}
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Animated Border on Hover */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color}`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${color}`}
                  />
                </div>

                {/* Floating View Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span
                      className={`relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-2xl flex items-center gap-2 border-2 border-white/20`}
                    >
                      <span>View Project</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${color} opacity-30 rounded-bl-full`}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-6 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
                {/* Title with Gradient Underline */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#0077B6] dark:group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                  </h2>
                  <div
                    className={`h-1 w-0 group-hover:w-16 bg-gradient-to-r ${color} rounded-full transition-all duration-500`}
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                  {description}
                </p>

                {/* Tech Stack with Icons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {stack.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="group/badge relative text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
                    >
                      <span className="relative z-10">{tech}</span>
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover/badge:opacity-10 rounded-xl transition-opacity duration-300`}
                      />
                    </span>
                  ))}
                  {stack.length > 3 && (
                    <span className="text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                      +{stack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Number Indicator */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-gray-400 dark:text-gray-600 font-bold text-sm border-2 border-gray-200 dark:border-gray-800 group-hover:scale-110 transition-transform duration-300">
                  {id}
                </div>
              </div>

              {/* Bottom Animated Accent Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
              />

              {/* Hover Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10 rounded-3xl`}
              />
            </div>
          )
        )}
      </div>

      {/* Enhanced Call to Action */}
      <div className="relative text-center mt-24" data-aos="fade-up">
        <div className="relative inline-block">
          {/* Glow effect behind text */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl opacity-20 animate-pulse" />

          <div className="relative bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12 border-2 border-gray-200 dark:border-gray-700 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Have a project in mind? Let's collaborate and bring your ideas to
              life.
            </p>

            <button onClick={handleClick} className="group/btn relative px-10 py-4 bg-gradient-to-r from-[#0077B6] via-blue-600 to-cyan-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect
                <svg
                  className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />

              {/* Animated particles */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping delay-100" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Projects;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { MdLiveTv } from "react-icons/md";
import { LuFileCode } from "react-icons/lu";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectFive = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const technologies = [
    { name: "React JS", icon: "⚛️" },
    { name: "TypeScript", icon: "🧠" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Tanstack Query", icon: "⚙️" },
  ];

  const features = [
    {
      icon: "✈️",
      title: "Multi-City Flight Search",
      description: "Search for flights across multiple destinations easily.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🕒",
      title: "Round-Trip & One-Way",
      description: "Supports all major travel types for better flexibility.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Optimized for both mobile and desktop users.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "⚡",
      title: "Real-Time Updates",
      description: "State management with Tanstack Query for live updates.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "💾",
      title: "Optimized Performance",
      description: "Fast rendering using TypeScript + React combination.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const buttons = [
    {
      href: "https://makemytrip-flight-search-box-clone.netlify.app/",
      label: "Live Site",
      Icon: MdLiveTv,
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      href: "https://github.com/sharearahammed/Flight-Search-Box-UsingTS.git",
      label: "Client Code",
      Icon: LuFileCode,
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="relative min-h-screen dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div
        id="projects"
        className="relative pt-20 md:pt-32 pb-32 px-4 max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-xl">
                ✈️ FLIGHT SEARCH BOX
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              MakeMyTrip Flight Search Clone
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium mb-4">
            Interactive, responsive, and feature-rich flight search interface
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A clone of MakeMyTrip’s flight search UI supporting one-way,
            round-trip, and multi-city options — built with React, TypeScript,
            Tailwind CSS, and Tanstack Query for efficient state management.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="mb-24" data-aos="zoom-in-up">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-500" />
            <div className="relative bg-white dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 shadow-2xl">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{ enabled: true }}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
              >
                {["/Project4Collage2.jpg", "/Project4Collage2.jpg", "/Project4Collage3.png"].map(
                  (src, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={src}
                        className="w-full h-auto md:h-[600px] object-cover"
                        alt={`Flight Search Screenshot ${i + 1}`}
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-24" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-24" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Technologies Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                data-aos="flip-down"
                data-aos-delay={index * 100}
                className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 text-center border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl hover:scale-105"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-start items-center flex-wrap"
          data-aos="zoom-in"
        >
          {buttons.map(({ href, label, Icon, gradient }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              <button
                className={`flex items-center justify-center gap-3 bg-gradient-to-r ${gradient} text-white px-8 py-4 rounded-2xl font-bold text-base hover:scale-110 transition-all duration-300`}
              >
                <Icon className="text-xl" /> {label}
              </button>
            </a>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default ProjectFive;

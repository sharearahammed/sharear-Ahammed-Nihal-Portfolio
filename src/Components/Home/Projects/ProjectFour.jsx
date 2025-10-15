import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { MdLiveTv } from "react-icons/md";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectFour = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Redux", icon: "🔄" },
    { name: "Material UI", icon: "🎨" },
    { name: "JavaScript", icon: "✨" },
    { name: "REST API", icon: "🔌" },
    { name: "Responsive Design", icon: "📱" },
  ];

  const features = [
    {
      icon: "🔍",
      title: "Advanced Search",
      desc: "Powerful flight search and filtering",
    },
    {
      icon: "🔐",
      title: "OTP Authentication",
      desc: "Secure OTP-based login system",
    },
    {
      icon: "📥",
      title: "ZIP Download",
      desc: "Download tickets and invoices",
    },
    { icon: "⚙️", title: "CRUD Operations", desc: "Complete admin management" },
    { icon: "📱", title: "Fully Responsive", desc: "Works on all devices" },
    {
      icon: "⚡",
      title: "Fast & Optimized",
      desc: "High performance delivery",
    },
  ];

  return (
    <div className="relative min-h-screen dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
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
        {/* Hero Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-xl">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                FEATURED PROJECT
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent blur-lg opacity-50">
                Fly Far International
              </span>
              <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Fly Far International
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium mb-4">
            A modern and fully responsive flight booking platform tailored for
            travel agencies and users.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Built using React, Redux, and Material UI, the application supports
            OTP-based authentication, ticket ZIP downloads, and comprehensive
            admin/user management features.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                6+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Key Features
              </div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-blue-400" />
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Responsive
              </div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-blue-400 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                3+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Screenshots
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mb-24" data-aos="zoom-in-up" data-aos-delay="200">
          <div className="relative group">
            {/* Glow Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-500" />

            {/* Carousel */}
            <div className="relative bg-white dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 shadow-2xl">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{ enabled: true }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="w-full"
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center overflow-hidden">
                    <img
                      className="w-full h-auto md:h-[600px] object-cover"
                      src="/FFIimgOne.png"
                      alt="Fly Far International Screenshot 1"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center overflow-hidden">
                    <img
                      className="w-full h-auto md:h-[600px] object-cover"
                      src="/FFIimgTwo.png"
                      alt="Fly Far International Screenshot 2"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center overflow-hidden">
                    <img
                      className="w-full h-auto md:h-[600px] object-cover"
                      src="/FFIimgThree.png"
                      alt="Fly Far International Screenshot 3"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        {/* Features Grid */}
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
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-24" data-aos="fade-up">
          <div className="bg-gradient-to-r from-white/90 to-blue-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 p-10 md:p-16 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              A scalable and fully responsive flight booking web application
              designed for travel agencies and individual users. This platform
              includes advanced booking features like flight search, OTP
              verification, ZIP ticket download, and complete CRUD operations.
              Developed using React, Redux, and Material UI with a focus on
              performance, responsiveness, and maintainability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start gap-4">
                <FaCode className="text-2xl text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Clean Code
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Well-structured and maintainable codebase
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaClock className="text-2xl text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Performance
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Optimized for speed and efficiency
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaUsers className="text-2xl text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    User Experience
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Intuitive and engaging interface
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Role & Responsibility */}
        <div
          className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-aos="fade-up"
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-xl rounded-2xl border border-blue-200 dark:border-blue-800 p-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Role & Responsibility
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              As the Front-End Developer, I led the UI development using React
              and Material UI, implemented Redux for state management,
              collaborated with backend developers to integrate APIs, and
              ensured full responsiveness across mobile, tablet, and desktop.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-900/30 dark:to-blue-900/30 backdrop-blur-xl rounded-2xl border border-cyan-200 dark:border-cyan-800 p-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies.slice(0, 4).map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="font-semibold">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-24" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                data-aos="flip-down"
                data-aos-delay={index * 100}
              >
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 text-center border-2 border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 hover:-translate-y-2">
                  <div className="text-5xl mb-3">{tech.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    {tech.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          data-aos="zoom-in"
        >
          {/* Live Site Button */}
          <a
            href="https://flyfarint.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl group-hover:scale-110 transition-all duration-300">
              <MdLiveTv className="text-2xl" />
              <span>Visit Live Site</span>
              <FaExternalLinkAlt className="text-lg" />
            </button>
          </a>

          {/* GitHub Button */}
          <a href="#">
            <button className="relative flex items-center justify-center gap-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl border-2 border-gray-200 dark:border-gray-800 group-hover:border-blue-600 dark:group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300">
              <FaGithub className="text-2xl" />
              <span>View Code</span>
            </button>
          </a>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
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

export default ProjectFour;

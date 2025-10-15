import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { MdLiveTv } from "react-icons/md";
import { LuFileCode } from "react-icons/lu";
import { FaUsers, FaLock, FaStripe, FaBell, FaMobileAlt } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectOne = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const technologies = [
    { name: "React JS", icon: "⚛️", color: "from-cyan-500 to-blue-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-teal-600" },
    { name: "Firebase", icon: "🔥", color: "from-orange-500 to-red-600" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-500" },
    { name: "NodeJS", icon: "⚙️", color: "from-green-600 to-emerald-700" },
  ];

  const features = [
    {
      icon: FaUsers,
      title: "Role-Based Dashboards",
      description: "Worker, Creator, and Admin specific interfaces",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaLock,
      title: "Secure Authentication",
      description: "Firebase-powered authentication system",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaStripe,
      title: "Stripe Integration",
      description: "Secure payments and withdrawal system",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: FaBell,
      title: "Real-Time Notifications",
      description: "Email alerts on task updates",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FaMobileAlt,
      title: "Fully Responsive",
      description: "Mobile-first design with Tailwind CSS",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "⚡",
      title: "High Performance",
      description: "Optimized and fast application",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const buttons = [
    {
      href: "https://mega-earning.netlify.app",
      label: "Live Site",
      Icon: MdLiveTv,
      gradient: "from-blue-600 to-purple-600",
    },
    {
      href: "https://github.com/sharearahammed/mega-earning-client.git",
      label: "Client Code",
      Icon: LuFileCode,
      gradient: "from-purple-600 to-pink-600",
    },
    {
      href: "https://github.com/sharearahammed/mega-earning-server.git",
      label: "Server Code",
      Icon: LuFileCode,
      gradient: "from-pink-600 to-red-600",
    },
  ];

  const keyFeatures = [
    "Secure user authentication with Firebase",
    "Stripe-based payments and withdrawals",
    "Worker, Creator, and Admin role-based dashboards",
    "Real-time email notifications on task updates",
    "Mobile-first responsive layout with Tailwind CSS",
    "Real-time task management system",
  ];

  return (
    <div className="relative min-h-screen  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-float"
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-xl">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                MERN STACK PROJECT
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent blur-lg opacity-50">
                Micro Task & Earning
              </span>
              <span className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Micro Task & Earning
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium mb-4">
            Crowdsourcing Platform for Task Completion & Earnings
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A responsive crowdsourcing platform where users earn by completing
            micro-tasks. Featuring secure authentication, role-based dashboards
            (Worker, Creator, Admin), real-time notifications, and Stripe
            integration. Built using the MERN stack with Firebase and Tailwind
            CSS for optimal performance.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                5+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Technologies
              </div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-purple-400" />
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                3
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                User Roles
              </div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-purple-400 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                4+
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
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-500" />

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
                {[
                  "/projectCollage1.png",
                  "/projectCollage2.png",
                  "/projectCollage3.png",
                  "/projectCollage4.png",
                ].map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex items-center justify-center overflow-hidden">
                      <img
                        src={src}
                        className="w-full h-auto md:h-[600px] object-cover"
                        alt={`Micro Task Platform Screenshot ${i + 1}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon =
                typeof feature.icon === "string" ? null : feature.icon;
              return (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">
                      {Icon ? (
                        <Icon className="text-5xl text-purple-600" />
                      ) : (
                        feature.icon
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-24" data-aos="fade-up">
          <div className="bg-gradient-to-r from-white/90 to-purple-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 p-10 md:p-16 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              The Micro-Task and Earning Platform is a comprehensive web
              application enabling users to earn money by completing small
              online tasks. It supports multiple user roles—Workers,
              Task-Creators, and Admins—each with custom dashboards. Workers can
              view, submit, and withdraw; Creators manage tasks and payments;
              Admins oversee the full system. The app uses Stripe for payments
              and includes automated email notifications for streamlined
              interaction.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800"
                >
                  <div className="text-2xl flex-shrink-0">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {feature}
                    </p>
                  </div>
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
          className="flex flex-col sm:flex-row gap-6 justify-start items-center flex-wrap"
          data-aos="zoom-in"
        >
          {buttons.map(({ href, label, Icon, gradient }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div />
              <button
                className={`relative flex items-center justify-center gap-3 bg-gradient-to-r ${gradient} hover:shadow-2xl text-white px-8 py-4 rounded-2xl font-bold text-base group-hover:scale-110 transition-all duration-300`}
              >
                <Icon className="text-xl" />
                <span>{label}</span>
              </button>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-up"
        >
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-900/30 dark:to-pink-900/30 backdrop-blur-xl rounded-2xl border border-purple-200 dark:border-purple-800 p-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              User Roles
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-lg">👤</span>
                <span>
                  <strong>Workers:</strong> Complete tasks, view earnings,
                  withdraw money
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🎯</span>
                <span>
                  <strong>Creators:</strong> Post tasks, manage submissions,
                  track payments
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">⚙️</span>
                <span>
                  <strong>Admins:</strong> Oversee platform, manage users,
                  monitor transactions
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-900/30 dark:to-cyan-900/30 backdrop-blur-xl rounded-2xl border border-blue-200 dark:border-blue-800 p-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Performance
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-lg">⚡</span>
                <span>Lightning-fast performance with React optimization</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🎨</span>
                <span>Beautiful responsive design with Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🔐</span>
                <span>Secure transactions with Stripe & Firebase</span>
              </li>
            </ul>
          </div>
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

export default ProjectOne;

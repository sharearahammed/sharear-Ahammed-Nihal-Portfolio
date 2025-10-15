import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { MdLiveTv } from "react-icons/md";
import { LuFileCode } from "react-icons/lu";
import {
  FaShieldAlt,
  FaStripe,
  FaEnvelope,
  FaDatabase,
  FaMobileAlt,
  FaAward,
} from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectTwo = () => {
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
      icon: FaShieldAlt,
      title: "JWT Authentication",
      description: "Secure login system for users and admins",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaStripe,
      title: "Stripe Integration",
      description: "Seamless and secure room payments",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaEnvelope,
      title: "Email Notifications",
      description: "Automated booking confirmations & updates",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FaDatabase,
      title: "Full CRUD Operations",
      description: "Dynamic room listing and management",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: FaMobileAlt,
      title: "Fully Responsive",
      description: "Perfect experience on all devices",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: FaAward,
      title: "Admin Dashboard",
      description: "Manage users, rooms, and transactions",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const buttons = [
    {
      href: "https://sunshinecity-hotelbooking.netlify.app",
      label: "Live Site",
      Icon: MdLiveTv,
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      href: "https://github.com/sharearahammed/hotel-booking-client.git",
      label: "Client Code",
      Icon: LuFileCode,
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      href: "https://github.com/sharearahammed/hotel-booking-server",
      label: "Server Code",
      Icon: LuFileCode,
      gradient: "from-indigo-600 to-purple-600",
    },
  ];

  const keyFeatures = [
    "JWT-based secure login system for users and admins",
    "Stripe integration for seamless room payments",
    "Email notifications for bookings and updates",
    "Dynamic room listing with full CRUD functionality",
    "Mobile-responsive design using Tailwind CSS",
    "Real-time admin dashboard for system management",
  ];

  return (
    <div className="relative min-h-screen dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float"
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-xl">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                FULL-STACK PROJECT
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent blur-lg opacity-50">
                Hotel Room Booking
              </span>
              <span className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Hotel Room Booking
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium mb-4">
            Reservation & Payment Platform for Hotels
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A full-featured hotel room reservation system offering seamless
            booking, secure payments, and role-based access for users and
            admins. The platform includes real-time email notifications,
            JWT-based authentication, Stripe integration, and responsive UI
            powered by React and Tailwind CSS.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                5+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Technologies
              </div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-cyan-400" />
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                6
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Key Features
              </div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
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
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-500" />

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
                  "/Project2Collage1.png",
                  "/Project2Collage2.png",
                  "/Project2Collage3.png",
                  "/Project2Collage4.png",
                ].map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex items-center justify-center overflow-hidden">
                      <img
                        src={src}
                        className="w-full h-auto md:h-[600px] object-cover"
                        alt={`Hotel Booking Screenshot ${i + 1}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Image Counter */}
              <div className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full text-white text-sm font-bold">
                4/4 Screenshots
              </div>
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
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:border-cyan-400 dark:hover:border-cyan-600 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">
                      <Icon className="text-5xl text-cyan-600" />
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
          <div className="bg-gradient-to-r from-white/90 to-cyan-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 p-10 md:p-16 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              This responsive hotel booking platform allows users to browse
              available rooms, make reservations, leave reviews, and handle
              payments securely. Admins can manage listings, users, and
              transactions. The app uses JSON Web Tokens (JWT) for secure
              authentication, integrates Stripe for payments, and supports
              automated emails for confirmations and notifications.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 border border-cyan-200 dark:border-cyan-800"
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
              <div key={index} data-aos="flip-down" data-aos-delay={index * 100}>
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

        {/* Key Highlights */}
        <div
          className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-up"
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-900/30 dark:to-blue-900/30 backdrop-blur-xl rounded-2xl border border-cyan-200 dark:border-cyan-800 p-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🔐 Security Features
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-lg">🛡️</span>
                <span>JWT-based authentication for secure login</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">💳</span>
                <span>Stripe integration for secure payments</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <span>Automated email confirmations</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-900/30 dark:to-purple-900/30 backdrop-blur-xl rounded-2xl border border-indigo-200 dark:border-indigo-800 p-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ⚡ Performance & UX
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-lg">📱</span>
                <span>Fully responsive mobile design</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🚀</span>
                <span>Optimized performance and loading speed</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🎯</span>
                <span>Intuitive user interface and navigation</span>
              </li>
            </ul>
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
              <div
                className={`absolute inset-0  rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <button
                className={`relative flex items-center justify-center gap-3 bg-gradient-to-r ${gradient} hover:shadow-2xl text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl group-hover:scale-110 transition-all duration-300`}
              >
                <Icon className="text-xl" />
                <span>{label}</span>
              </button>
            </a>
          ))}
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

export default ProjectTwo;

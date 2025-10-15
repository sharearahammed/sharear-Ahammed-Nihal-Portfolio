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

const ProjectThree = () => {
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
      title: "Responsive UI",
      description: "Optimized for all screen sizes and devices.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Destination Management",
      description: "CRUD features for adding and managing tourist spots.",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Secure Authentication",
      description: "Protected routes and role-based access.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Emergency Info",
      description: "Display of crucial local emergency contact details.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const buttons = [
    {
      href: "https://roamazing-tourism-management.netlify.app",
      label: "Live Site",
      Icon: MdLiveTv,
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      href: "https://github.com/sharearahammed/tourism-management-client.git",
      label: "Client Code",
      Icon: LuFileCode,
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      href: "https://github.com/sharearahammed/tourism-management-server",
      label: "Server Code",
      Icon: LuFileCode,
      gradient: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <div className="relative min-h-screen dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background */}
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

      {/* Main Content */}
      <div
        id="projects"
        className="relative pt-20 md:pt-32 pb-32 px-4 max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-xl">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                FULL-STACK PROJECT
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent blur-lg opacity-50">
                Tourism Management
              </span>
              <span className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Tourism Management
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium mb-4">
            Destination Explorer Platform for Southeast Asia
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A responsive travel information system providing destination details,
            emergency contact info, admin management tools, and secure
            authentication — ensuring a smooth user experience across all devices.
          </p>
        </div>

        {/* Swiper */}
        <div className="mb-24" data-aos="zoom-in-up">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-500" />
            <div className="relative bg-white dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 shadow-2xl">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{ enabled: true }}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="w-full"
              >
                {["/Project3Collage1.png", "/Project3Collage2.png"].map(
                  (src, i) => (
                    <SwiperSlide key={i}>
                      <div className="flex items-center justify-center overflow-hidden">
                        <img
                          src={src}
                          className="w-full h-auto md:h-[600px] object-cover"
                          alt={`Tourism Management Screenshot ${i + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
              <div className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full text-white text-sm font-bold">
                2/2 Screenshots
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-24" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:border-cyan-400 dark:hover:border-cyan-600 transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            ))}
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

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-start items-center flex-wrap"
          data-aos="zoom-in"
        >
          {buttons.map(({ href, label, Icon, gradient }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              <button
                className={`relative flex items-center justify-center gap-3 bg-gradient-to-r ${gradient} hover:shadow-2xl text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl hover:scale-110 transition-all duration-300`}
              >
                <Icon className="text-xl" />
                <span>{label}</span>
              </button>
            </a>
          ))}
        </div>
      </div>

      {/* Animations */}
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

export default ProjectThree;

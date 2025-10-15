import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { category: "Frontend", icon: FaLaptopCode, skills: ["React.js", "Tailwind CSS", "JavaScript", "TypeScript"], color: "from-cyan-500 to-blue-600" },
    { category: "Backend", icon: FaServer, skills: ["Node.js", "Express", "MongoDB", "Firebase"], color: "from-green-500 to-teal-600" },
    { category: "Core", icon: FaCode, skills: ["REST APIs", "JWT Auth", "CRUD Ops", "Responsive Design"], color: "from-purple-500 to-pink-600" },
  ];

  const achievements = [
    { label: "Years Experience", value: "1+", icon: "🎯" },
    { label: "Projects Completed", value: "5+", icon: "🚀" },
    { label: "Tech Stack", value: "10+", icon: "💻" },
    { label: "Happy Clients", value: "50+", icon: "😊" },
  ];

  const highlights = [
    { icon: "💡", title: "Problem Solver", desc: "Creative solutions to complex challenges" },
    { icon: "🤝", title: "Team Player", desc: "Collaborate effectively with developers" },
    { icon: "🎨", title: "UI Enthusiast", desc: "Crafting beautiful, clean interfaces" },
    { icon: "🔐", title: "Security Focused", desc: "Building secure and reliable APIs" },
    { icon: "📚", title: "Continuous Learner", desc: "Always exploring new technologies" },
    { icon: "⚡", title: "Performance Driven", desc: "Optimizing apps for speed" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-500" />
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

      <div id="about" className="relative pt-20 md:pt-32 pb-32 px-4 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20" data-aos="fade-down">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-xl">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                GET TO KNOW ME
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent blur-lg opacity-50">
                More About Me
              </span>
              <span className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                More About Me
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl italic text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            "Great web experiences don't just happen — they're crafted with care, code, and creativity."
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate, dedicated, and always eager to learn something new
          </p>

          <div className="flex items-center justify-center mt-10 gap-4">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-blue-500 rounded-full" />
          </div>
        </div>

        {/* About Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Text Section */}
          <div data-aos="fade-right" data-aos-delay="200">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-all duration-500" />

              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl border-2 border-gray-200 dark:border-gray-800 p-8 md:p-12 shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" />
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
                  Hello! I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Sharear Ahammed</span>
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  A passionate <strong>Front-End Web Developer</strong> with <strong>1+ year of professional experience</strong> at Fly Far Tech Company. I craft beautiful, responsive web experiences that users love.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">💻</span>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Full-Stack Capabilities</h4>
                      <p className="text-gray-600 dark:text-gray-400">React.js, Node.js, MongoDB, Firebase, and more</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">CSE Bachelor's from AIUB</h4>
                      <p className="text-gray-600 dark:text-gray-400">Strong foundations in software development</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Mission-Driven</h4>
                      <p className="text-gray-600 dark:text-gray-400">Building impactful digital experiences with clean code</p>
                    </div>
                  </div>
                </div>

                <a href="#contact" className="inline-block group/btn relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-lg opacity-70 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <button className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-2xl text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl group-hover/btn:scale-105 transition-all duration-300">
                    Let's Work Together →
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div data-aos="fade-left" data-aos-delay="200">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-300 to-teal-400 dark:from-blue-600 dark:via-cyan-500 dark:to-teal-600 rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden">
                    <img
                      src="/oneYear.png"
                      alt="Experience Badge"
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-4 shadow-2xl transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                    <div className="text-center">
                      <div className="text-2xl font-black">1+</div>
                      <div className="text-xs font-bold">Year Exp.</div>
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 font-semibold">
                  1+ Year Hands-on Experience
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 text-center border-2 border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{achievement.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-24" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                  className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${skillGroup.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="text-white text-2xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{skillGroup.category}</h3>
                    </div>

                    <div className="space-y-3">
                      {skillGroup.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`} />
                          <span className="text-gray-700 dark:text-gray-300 font-semibold">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skillGroup.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-24" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Drives Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 text-center border-2 border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-500 hover:-translate-y-2 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{highlight.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Float Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;

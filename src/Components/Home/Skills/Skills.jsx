import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillCard = ({ src, title, extra, category }) => (
  <div
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    {/* Card Container */}
    <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border-2 border-gray-200 dark:border-gray-800 p-8 text-center
      transition-all duration-500 cursor-default h-full
      hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 hover:-translate-y-3 hover:scale-105"
    >
      {/* Glow Background - Fixed position */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      {/* Content - Relative position on top */}
      <div className="relative z-10">
        {/* Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

        {/* Icon */}
        <div className="flex justify-center mb-6 pt-4">
          <img
            className={`h-24 w-24 object-contain transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-lg ${extra || ""}`}
            src={src}
            alt={title || "skill icon"}
            title={title}
            loading="lazy"
          />
        </div>

        {/* Title */}
        <p className="text-xl font-bold text-gray-800 dark:text-gray-100 select-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </p>

        {/* Category Badge */}
        <div className="mt-3 inline-block">
          <span className={`text-xs font-bold px-3 py-1 rounded-full
            ${category === 'Expertise' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
              category === 'Comfortable' ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300' :
              category === 'Advanced' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
              'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300'}
          `}>
            {category}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const skillSections = [
  {
    title: "Expertise",
    description: "Technologies I excel at and use daily",
    icon: "⭐",
    color: "from-blue-500 to-cyan-500",
    grid: "grid-cols-2 lg:grid-cols-4",
    skills: [
      { src: "/react.svg", title: "React" },
      { src: "/nextjs.png", title: "Next.js" },
      { src: "/tailwind.png", title: "Tailwind" },
      { src: "/redux.svg", title: "Redux" },
      { src: "/mui.png", title: "Material UI" },
      { src: "/mongodb.svg", title: "MongoDB" },
    ],
  },
  {
    title: "Comfortable",
    description: "Technologies I work with frequently and confidently",
    icon: "✨",
    color: "from-purple-500 to-pink-500",
    grid: "grid-cols-2 lg:grid-cols-4",
    skills: [
      { src: "/js.png", title: "JavaScript" },
      { src: "/typescript-def.png", title: "TypeScript" },
      { src: "/express.png", title: "Express" },
      { src: "/Postgresql_elephant.png", title: "PostgreSQL" },
    ],
  },
  {
    title: "Advanced",
    description: "Specialized technologies for complex applications",
    icon: "🚀",
    color: "from-green-500 to-teal-500",
    grid: "grid-cols-2 lg:grid-cols-3",
    skills: [
      { src: "/node.svg", title: "Node.js" },
      { src: "/jwt.svg", title: "JWT" },
      { src: "/firebase.svg", title: "Firebase" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Development tools and deployment platforms",
    icon: "🛠️",
    color: "from-orange-500 to-red-500",
    grid: "grid-cols-2 lg:grid-cols-4",
    skills: [
      { src: "/git.svg", title: "Git" },
      { src: "/github-Logo.svg", title: "GitHub" },
      { src: "/Vercel.png", title: "Vercel", extra: "py-7 md:py-4 md:px-5" },
      { src: "/netlify.svg", title: "Netlify" },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-500" />
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

      <div className="relative pt-20 md:pt-32 pb-32 px-4 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-down">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-xl">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                TECHNICAL EXPERTISE
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent blur-lg opacity-50">
                My Skills
              </span>
              <span className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                My Skills
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium mb-4">
            Technologies I've been working with and mastering
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-10 gap-4">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-blue-500 rounded-full" />
          </div>
        </div>

        {/* Skills Sections */}
        {skillSections.map((section, sectionIdx) => (
          <section key={sectionIdx} className="mb-24" data-aos="fade-up" data-aos-delay={sectionIdx * 150}>
            {/* Section Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{section.icon}</span>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{section.description}</p>
                </div>
              </div>

              {/* Section Accent Line */}
              <div className={`h-1.5 w-24 bg-gradient-to-r ${section.color} rounded-full`} />
            </div>

            {/* Skills Grid */}
            <div className={`${section.grid} grid gap-8 relative`}>
              {section.skills.map(({ src, title, extra }, idx) => (
                <SkillCard 
                  key={idx} 
                  src={src} 
                  title={title} 
                  extra={extra}
                  category={section.title}
                />
              ))}
            </div>
          </section>
        ))}

        {/* Summary Section */}
        <div className="mt-24" data-aos="zoom-in">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl blur-3xl opacity-20 animate-pulse" />
          
          <div className="relative bg-gradient-to-r from-white/90 to-blue-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-3xl border-2 border-gray-200 dark:border-gray-800 p-10 md:p-16 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm committed to staying updated with the latest web technologies and best practices. My skill set continues to evolve with hands-on experience and continuous learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Problem Solving</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tackling complex challenges with clean, efficient code</p>
              </div>

              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Performance</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Building fast, optimized applications users love</p>
              </div>

              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Innovation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Exploring new technologies and modern solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
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

export default Skills;
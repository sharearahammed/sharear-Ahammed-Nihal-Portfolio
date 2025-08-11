import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillCard = ({ src, title, extra }) => (
  <div
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
    className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-gray-900
      border border-gray-200 dark:border-gray-700 shadow-sm
      hover:shadow-lg hover:shadow-[0_0_8px_rgba(0,119,182,0.5)] hover:scale-105
      transition-transform duration-300 cursor-default"
  >
    <img
      className={`h-20 w-20 object-contain ${
        extra || ""
      } hover:animate-bounce-small`}
      src={src}
      alt={title || "skill icon"}
      title={title}
      loading="lazy"
    />
    <p className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-100 select-none">
      {title}
    </p>
  </div>
);

const WideCard = ({ src, title }) => (
  <div
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
    className="flex flex-col items-center p-6 rounded-lg bg-white dark:bg-gray-900
      border border-gray-200 dark:border-gray-700 shadow-sm
      hover:shadow-lg hover:shadow-[0_0_8px_rgba(0,119,182,0.5)] hover:scale-105
      transition-transform duration-300 cursor-default
      col-span-2 lg:col-span-1 w-full"
  >
    <img
      className="h-20 w-20 object-contain hover:animate-bounce-small"
      src={src}
      alt={title || "skill icon"}
      title={title}
      loading="lazy"
    />
    <p className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-100 select-none">
      {title}
    </p>
  </div>
);

const skillSections = [
  {
    title: "Expertise",
    grid: "grid-cols-2 lg:grid-cols-4",
    skills: [
      { src: "/react.svg", title: "React" },
      { src: "/nextjs.png", title: "Nextjs" },
      { src: "/tailwind.png", title: "Tailwind" },
      { src: "/redux.svg", title: "Redux" },
      { src: "/mui.png", title: "Material UI" },
      { src: "/mongodb.svg", title: "MongoDB" }
    ],
    // wide: { src: "/mongodb.svg", title: "MongoDB" },
  },
  {
    title: "Comfortable",
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
    grid: "grid-cols-2 lg:grid-cols-3",
    skills: [
      { src: "/node.svg", title: "Node.js" },
      { src: "/jwt.svg", title: "JWT" },
    ],
    wide: { src: "/firebase.svg", title: "Firebase" },
  },
  {
    title: "Tools",
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
    AOS.init({ once: true });
  }, []);

  return (
    <div id="skills" className="pt-24 md:pt-28 mb-20 px-5 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0077B6] tracking-tight mb-2 select-none">
          My Skills
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto select-none">
          Technologies I’ve been working with
        </p>
      </div>

      {skillSections.map((section, i) => (
        <section key={i} className="mb-16 relative rounded-lg p-0">
          <h2
            className="relative text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8
            border-b-2 border-[#0077B6] inline-block pb-1 tracking-wide select-none"
          >
            {section.title}
          </h2>

          <div className={`${section.grid} relative grid gap-8`}>
            {section.skills.map(({ src, title, extra }, idx) => (
              <SkillCard key={idx} src={src} title={title} extra={extra} />
            ))}
            {section.wide && (
              <WideCard src={section.wide.src} title={section.wide.title} />
            )}
          </div>
        </section>
      ))}

      <style>{`
        @keyframes bounce-small {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .hover\\:animate-bounce-small:hover {
          animation: bounce-small 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Skills;

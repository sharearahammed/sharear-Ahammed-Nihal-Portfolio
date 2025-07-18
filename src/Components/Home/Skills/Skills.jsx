const SkillCard = ({ src, title, extra }) => (
  <div
    data-aos="flip-left"
    data-aos-duration="2000"
    className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl flex flex-col border justify-center items-center lg:h-[200px] rounded-lg p-4 lg:p-0"
  >
    <img
      className={`h-20 ${extra || ""}`}
      src={src}
      alt={title || "skill icon"}
    />
    <p className="mt-4 text-[12px] md:text-[16px]">{title}</p>
  </div>
);

const WideCard = ({ src, title }) => (
  <div
    data-aos="flip-left"
    data-aos-duration="2000"
    className="hover:border-[#0077B6] duration-500 hover:scale-105 hover:shadow-xl 
      flex flex-col justify-center items-center border lg:h-[200px] 
      rounded-lg p-4 lg:p-0 col-span-2 lg:col-span-1 w-full"
  >
    <img className="h-20" src={src} alt={title || "skill icon"} />
    <p className="mt-4 text-[12px] md:text-[16px]">{title}</p>
  </div>
);

const skillSections = [
  {
    title: "Expertise",
    grid: "grid-cols-2 lg:grid-cols-4",
    skills: [
      { src: "/react.svg", title: "React" },
      { src: "/tailwind.png", title: "Tailwind" },
      { src: "/redux.svg", title: "Redux" },
      { src: "/mui.png", title: "Material UI" },
    ],
    wide: { src: "/mongodb.svg", title: "MongoDB" },
  },
  {
    title: "Comfortable",
    grid: "grid-cols-2 lg:grid-cols-4",
    skills: [
      { src: "/js.png", title: "JavaScript" },
      { src: "/express.png", title: "Express" },
      { src: "/typescript-def.png", title: "TypeScript" },
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
  return (
    <div id="skills" className="pt-24 md:mt-0 md:pt-28 mb-20 md:px-5 lg:px-5">
      <div className="text-center mb-10 lg:mb-10">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 text-[#0077B6] dark:text-blue-400">
        My Skills
        </h1>
        <p className="text-[14px] md:text-xl">
          Technologies I’ve been working with
        </p>
      </div>

      {skillSections.map((section, i) => (
        <section key={i} className="md:mt-10 text-center p-5 lg:p-0 lg:mx-5">
          <p className="mb-10 text-xl font-bold underline">{section.title}</p>
          <div
            className={`grid ${section.grid} justify-center items-center gap-10`}
          >
            {section.skills.map((skill, index) => (
              <SkillCard
                key={index}
                src={skill.src}
                title={skill.title}
                extra={skill.extra}
              />
            ))}
            {section.wide && (
              <WideCard src={section.wide.src} title={section.wide.title} />
            )}
          </div>
        </section>
      ))}

    </div>
  );
};

export default Skills;

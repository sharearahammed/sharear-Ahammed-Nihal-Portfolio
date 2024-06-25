/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div id="about" className="mt-5 md:mt-0 mb-20 md:px-5 lg:px-0">
        <h1 className="mb-8 md:mb-10 lg:mb-0 text-center text-2xl md:text-5xl font-bold">More About Me</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        <div className="px-5 md:px-0 text-[18px]">
      <p className="mb-3 md:mb-5">Hi, I'm Sharear Ahammed Nihal</p>
      <p className="text-justify">
      I am a dedicated front-end web developer proficient in JavaScript, React.js, and Tailwind CSS, with expertise in Node.js, Express, MongoDB, and Firebase for back-end development. A recent graduate in Computer Science and Engineering from <span className="font-bold">American International University Bangladesh (AIUB)</span>, I excel in creating responsive web applications and integrating secure authentication and payment systems. I thrive in collaborative environments and am committed to continuous learning and delivering high-quality results
      </p>
        </div>
        <div>
            <div className="px-5 md:px-0">
            <img className="md:p-20" src="/aboutMe.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;

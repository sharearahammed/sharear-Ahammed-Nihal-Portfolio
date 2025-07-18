/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div id="about" className="mt-5 md:mt-0 mb-20 md:px-5 lg:px-5">
      <h1 className="mb-8 md:mb-10 lg:mb-0 text-center text-xl md:text-5xl font-bold">
        More About Me
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        <div className="px-5 md:px-0 text-[12px] md:text-[18px]">
          <p className="mb-3 md:mb-5">Hi, I'm Sharear Ahammed Nihal</p>
          <p className="text-justify">
            I am a front-end web developer with 1 year of professional
            experience at Fly Far Tech Company. Skilled in JavaScript, React.js,
            and Tailwind CSS, I also have strong back-end knowledge with
            Node.js, Express, MongoDB, and Firebase. I hold a Bachelor’s degree
            in Computer Science and Engineering from American International
            University Bangladesh (AIUB). I specialize in building responsive,
            user-friendly web applications and integrating secure authentication
            and payment systems. I am passionate about collaborating within
            teams and committed to continuous learning and delivering
            high-quality, maintainable solutions.
          </p>
        </div>
        <div>
          <div className="px-5 md:px-0 mt-10 md:mt-0">
            {/* <img className="md:p-20" src="/aboutMe.png" alt="" /> */}
            <img
              className="mx-auto h-[100px] md:h-[400px] md:p-20 object-contain"
              src="/oneYear.png"
              alt="One Year Badge"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

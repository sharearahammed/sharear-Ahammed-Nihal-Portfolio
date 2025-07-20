/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      id="about"
      className="relative pt-[100px] md:pt-[104px] mb-20 px-5 md:px-10 lg:px-20 max-w-7xl mx-auto"
    >
      {/* Decorative background blob */}
      <div className="absolute top-10 left-[-100px] w-[250px] h-[250px] bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl opacity-20 z-0"></div>

      {/* Heading */}
      <div className="text-center mb-12 relative z-0">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0077B6] dark:text-blue-400">
          More About Me
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Passionate, dedicated, and always eager to learn something new.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-0">
        {/* Text Section */}
        <div
          data-aos="fade-right"
          className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg p-6 md:p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <blockquote className="text-[#0077B6] dark:text-blue-300 text-[14px] md:text-lg font-semibold italic border-l-4 border-blue-300 pl-4 mb-4">
            "Great web experiences don’t just happen — they’re crafted with care, code, and creativity."
          </blockquote>
          <p className="text-justify text-[13px] md:text-[17px] text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m <strong>Sharear Ahammed Nihal</strong>, a front-end web developer with <strong>1 year of professional experience</strong> at Fly Far Tech Company. My core skills include React.js, Tailwind CSS, and JavaScript. I also handle backend logic using Node.js, Express, MongoDB, and Firebase.
            <br /><br />
            I earned my Bachelor's in Computer Science & Engineering from <strong>AIUB</strong>, where I built strong foundations in both frontend and backend development. I'm passionate about team collaboration, clean UI, secure APIs, and building impactful digital experiences.
          </p>
        </div>

        {/* Image Section */}
        <div
          data-aos="fade-left"
          className="flex justify-center items-center"
        >
          <div className="relative group">
            <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-gradient-to-br from-blue-200 via-white to-blue-100 dark:from-blue-800 dark:via-gray-900 dark:to-blue-900 rounded-full shadow-inner p-2 flex justify-center items-center">
              <img
                src="/oneYear.png"
                alt="One Year Badge"
                className="object-contain h-[100px] md:h-[250px] transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-center text-sm md:text-base text-gray-700 dark:text-gray-300">
              1 Year+ Hands-on Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

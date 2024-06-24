import { ImGithub } from "react-icons/im";
import 'animate.css';

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        className="bg-cover rounded-tl-full"
      >
        <source src="/banner.mp4" type="video/mp4" />
      </video>
      <div className="bg-black bg-opacity-35 w-full h-full px-5 md:px-20 text-white absolute top-0 flex justify-between items-center lg:gap-[350px]">
        <div>
            <h1 className="text-[12px] pb-2 md:pb-10 lg:text-3xl md:text-2xl">Hi, I'm <br />Sharear Ahammed Nihal</h1>
            <div className="pb-2 md:pb-10 flex justify-center items-center gap-3">
                <a href="https://github.com/sharearahammed">
                <p className="animate__animated
            animate__bounce animate__slow animate__infinite	infinite text-[15px] lg:text-5xl md:text-4xl"><ImGithub /></p>
                </a>
                <h1 className="text-[12px] lg:text-4xl md:text-3xl">Front End Web Developer</h1>
            </div>
            <div className="flex items-center md:gap-3 gap-2">
                    <a href="#projects">
                    <button className="text-[8px] md:text-xl bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white px-2 py-1 md:px-4 md:py-3 rounded-md md:rounded-lg">View My Works</button>
                    </a>
                    <a href="#contact">
                    <button className="text-[8px] md:text-xl hover:bg-gray-600 text-white px-2 py-1 md:px-4 md:py-3 rounded-md  md:rounded-lg">Contact Me</button>
                    </a>
                </div>
        </div>
        <div>
            <div>
            <img className="h-[140px] w-[130px] md:w-full lg:h-[450px] md:h-[300px] rounded-full border-[5px] md:border-[10px] border-[#0077B6]" src="/nihal.png" alt="" />
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;

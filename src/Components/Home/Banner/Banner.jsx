import { ImGithub } from "react-icons/im";

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
      <div className="bg-black bg-opacity-45 w-full h-full px-5 md:px-20 text-white absolute top-0 flex justify-between items-center lg:gap-[350px]">
        <div>
            <h1 className="text-[12px] pb-2 md:pb-10 lg:text-3xl md:text-2xl">Hi, I'm <br />Sharear Ahammed Nihal</h1>
            <div className="pb-2 md:pb-10 flex justify-center items-center gap-3">
                <p className="text-[15px] lg:text-4xl md:text-3xl"><ImGithub /></p>
                <h1 className="text-[12px] lg:text-4xl md:text-3xl">Front End Web Developer</h1>
            </div>
            <div className="flex items-center md:gap-3 gap-2">
                    <a href="#projects">
                    <button className="text-[10px] md:text-xl bg-[#0077B6] px-2 py-1 md:px-4 md:py-2 rounded-lg">View My Works</button>
                    </a>
                    <a href="#contact">
                    <button className="text-[10px] md:text-xl">Contact Me</button>
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

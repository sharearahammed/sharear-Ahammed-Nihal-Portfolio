import { ImGithub } from "react-icons/im";
import "animate.css";
import "./Banner.css";

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div>
      <div
        id="home"
        className="dark:bg-slate-800 flex justify-center items-center"
      >
        <div className="relative flex justify-center items-center">
          <video autoPlay loop muted className="bg-cover">
            <source src="/banner.mp4" type="video/mp4" />
            max-w-7xl mx-auto
          </video>
          <div className="bg-black bg-opacity-35 w-full h-full px-5 md:px-20 text-white absolute top-0 flex justify-between items-center lg:gap-[350px] pt-2 md:pt-6 lg:pt-12">
            <div>
              <h1 className="text-[12px] pb-2 md:pb-10 lg:text-3xl md:text-2xl">
                Hi, I'm <br />
                Sharear Ahammed Nihal
              </h1>
              <div className="pb-2 md:pb-10 flex justify-center items-center gap-3">
                <a href="https://github.com/sharearahammed">
                  <p
                    className="animate__animated
            animate__bounce animate__slow animate__infinite	infinite text-[15px] lg:text-5xl md:text-4xl"
                  >
                    <ImGithub />
                  </p>
                </a>
                <h1 className="text-[12px] lg:text-4xl md:text-3xl">
                  Front End Web Developer
                </h1>
              </div>
              <div className="flex items-center md:gap-3 gap-2">
                <a href="#projects">
                  <button className="text-[8px] md:text-xl bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white px-2 py-1 md:px-4 md:py-3 rounded-md md:rounded-lg">
                    View My Works
                  </button>
                </a>
                <a href="#contact">
                  <button className="text-[8px] md:text-xl hover:bg-black text-white px-2 py-1 md:px-4 md:py-3 rounded-md  md:rounded-lg">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="h-[140px] w-[130px] md:w-full lg:h-[450px] md:h-[300px] rounded-full border-[5px] md:border-[10px] border-[#0077B6]"
                  src="/nihal.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="waves -top-[24px] md:-top-[79px] lg:-top-[199px]">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="h-6 md:h-20 lg:h-[200px] w-full shape"
    >
        <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
        ></path>
    </svg>
      </div>
    </div>
  );
};

export default Banner;

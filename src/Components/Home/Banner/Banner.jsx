import { ImGithub } from "react-icons/im";
import "animate.css";
import "./Banner.css";
import { motion } from "framer-motion";
import { useNavigate, useOutletContext } from "react-router-dom";
import useIsMediumUp from "../../useScreen";

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  const navigate = useNavigate();
  const isMediumUp = useIsMediumUp();
  return (
    <div className="gruppo">
      <div id="home" className="flex justify-center items-center">
        <div className="relative flex justify-center items-center">
          {!isMediumUp ? (
            <video
              autoPlay
              loop
              muted
              className="w-full h-[500px] object-cover"
            >
              <source src="/banner.mp4" type="video/mp4" />
            </video>
          ) : (
            <video
              autoPlay
              loop
              muted
              className="bg-cove"
            >
              <source src="/banner.mp4" type="video/mp4" />
            </video>
          )}
          <div className="max-w-7xl mx-auto px-4 w-full h-full text-white absolute top-0 grid grid-cols-2 items-center lg:gap-[350px] pt-2 md:pt-6 lg:pt-0">
            <div>
              <h1 className="text-[12px] sm:text-[14px] pb-1 md:pb-10 md:text-2xl lg:text-3xl">
                Hi, I'm <br />
                Sharear Ahammed Nihal
              </h1>
              <div className="pb-1 md:pb-10 flex justify-center lg:grid lg:grid-cols-8 items-center">
                <p className="text-[16px] sm:text-[18px] lg:text-4xl md:text-3xl">
                  <motion.div
                    className="rounded-full mr-3 md:mr-5"
                    animate={{ y: [0, 3, 6, 3, 0, -3, -6, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <a
                      href="https://github.com/sharearahammed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shadow-md shadow-[#97a1db] hover:text-white transition rounded-full hover:cursor-pointer"
                    >
                      <ImGithub />
                    </a>
                  </motion.div>
                </p>

                <h1 className="text-[14px] sm:text-[16px] lg:text-4xl md:text-2xl w-[700px] font-bold">
                  Front End Web Developer
                </h1>
              </div>
              <div className="flex items-center md:gap-3 gap-2">
                <a href="/projects">
                  <button className="text-[8px] sm:text-[10px] md:text-[16px] bg-gradient-to-r from-[#0077B6] to-blue-500 hover:from-blue-950 hover:to-blue-800 text-white px-2 py-1 md:px-4 md:py-3 rounded-md md:rounded-lg">
                    View My Works
                  </button>
                </a>
                <a href="#contact">
                  <button
                    onClick={() => {
                      navigate("/contact");
                    }}
                    className="text-[8px] sm:text-[10px] md:text-[16px] hover:bg-black text-white px-2 py-1 md:px-4 md:py-3 rounded-md  md:rounded-lg"
                  >
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
            <div className="flex justify-end items-center w-[100%]">
              <div>
                <img
                  className="h-[150px] w-[150px] md:w-full xl:h-[85%] md:h-[290px] rounded-full border-[5px] md:border-[10px] border-[#0077B6]"
                  src="/nihal.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="waves -top-[24px] md:-top-[79px] lg:-top-[199px]">
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
      </div> */}
    </div>
  );
};

export default Banner;
